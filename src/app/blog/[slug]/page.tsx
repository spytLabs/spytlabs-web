import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import type { TypedObject } from "sanity";
import ContactFooterSection from "../../components/contactFooterSection";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import PageHeroSection from "@/app/components/pageHeroSection";
type SlugPageProps = {
  params: Promise<{ slug: string }>;
};

type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  publishedAt?: string;
  authorName?: string;
  body?: TypedObject[];
  categories?: string[];
  mainImage?: {
    alt?: string;
    asset?: unknown;
  };
};

const postBySlugQuery = `*[_type == "post" && (slug.current == $slug || _id == $slug || _id == "drafts." + $slug)][0] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  "authorName": author->name,
  "categories": categories[]->title,
  mainImage,
  body
}`;

function formatDate(date?: string) {
  if (!date) return "";
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

async function getPost(slug: string) {
  return client.fetch<BlogPost | null>(postBySlugQuery, { slug });
}

export async function generateMetadata({
  params,
}: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | spytLabs",
    };
  }

  return {
    title: `${post.title} | spytLabs Blog`,
    description: `Read ${post.title} on the spytLabs blog.`,
  };
}

export default async function BlogPostPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mb-10 mt-5 mx-5 box-border bg-white max-[1060px]:m-0">
      <PageHeroSection title={post.title} heroBg="/figma-assets/hero-bg.jpg" />
 

      <div className="mx-auto w-full max-w-245 px-5 pb-16 pt-10 sm:px-10 sm:pt-14">
             <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-black transition-colors"
      >
        <span aria-hidden="true">←</span>
        Back to Blog
      </Link>
        {post.mainImage?.asset ? (
          <div className="overflow-hidden rounded-xl">
            <img
              src={urlFor(post.mainImage)
                .width(1600)
                .height(900)
                .fit("crop")
                .url()}
              alt={post.mainImage.alt || post.title}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}

        <article className="mt-10">
          <div className="text-[#292642] [&_a]:text-[#2f1abc] [&_a]:underline [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-[#cabfff] [&_blockquote]:pl-5 [&_blockquote]:text-[22px] [&_blockquote]:leading-[1.35] [&_blockquote]:text-[#332872] [&_h1]:mb-4 [&_h1]:mt-10 [&_h1]:text-[clamp(34px,4vw,56px)] [&_h1]:leading-[1.1] [&_h1]:font-semibold [&_h1]:tracking-[-0.03em] [&_h2]:mb-4 [&_h2]:mt-9 [&_h2]:text-[clamp(30px,3.4vw,46px)] [&_h2]:leading-[1.15] [&_h2]:font-semibold [&_h2]:tracking-[-0.025em] [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-[clamp(26px,3vw,38px)] [&_h3]:leading-[1.2] [&_h3]:font-semibold [&_li]:ml-6 [&_li]:list-disc [&_li]:text-[clamp(17px,1.3vw,22px)] [&_li]:leading-[1.7] [&_p]:my-5 [&_p]:text-[clamp(18px,1.4vw,24px)] [&_p]:leading-[1.78]">
            <PortableText
              value={post.body || []}
              components={{
                types: {
                  image: ({
                    value,
                  }: {
                    value: { alt?: string; asset?: unknown };
                  }) => {
                    if (!value?.asset) return null;
                    return (
                      <div className="my-9 overflow-hidden rounded-xl border border-black/10">
                        <img
                          src={urlFor(value).width(1400).fit("max").url()}
                          alt={value.alt || post.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    );
                  },
                },
              }}
            />
          </div>
        </article>
      </div>

      <ContactFooterSection />
    </main>
  );
}
