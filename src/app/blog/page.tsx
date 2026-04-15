import type { Metadata } from "next";
import Link from "next/link";
import ContactFooterSection from "../components/contactFooterSection";
import PageHeroSection from "../components/pageHeroSection";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type BlogCard = {
  _id: string;
  docId: string;
  title: string;
  slug?: string;
  publishedAt?: string;
  authorName?: string;
  mainImage?: {
    alt?: string;
    asset?: unknown;
  };
  categories?: string[];
  excerpt?: string;
};

const allPostsQuery = `*[_type == "post"] | order(coalesce(publishedAt, _updatedAt, _createdAt) desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  "authorName": author->name,
  mainImage,
  "categories": categories[]->title,
  "excerpt": pt::text(body)[0...180]
}`;

export const metadata: Metadata = {
  title: "Blog | spytLabs",
  description: "Insights, updates, and stories from spytLabs.",
};

export default async function BlogPage() {
  const rawPosts = await client.fetch<BlogCard[]>(allPostsQuery);

  const postMap = new Map<string, BlogCard>();
  for (const post of rawPosts) {
    const docId = post._id.replace(/^drafts\./, "");
    if (!postMap.has(docId)) {
      postMap.set(docId, { ...post, docId });
    }
  }

  const posts = [...postMap.values()].filter((post) => post.title);
  const [featuredPost, ...remainingPosts] = posts;

  const renderCard = (post: BlogCard, isTopCard = false) => {
    const href = `/blog/${post.slug || post.docId}`;
    const cardContent = (
      <>
        <div className="text-center transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
          <p className="text-[11px] leading-[1.2] font-medium tracking-[0.08em] text-[#77767e] uppercase">
            {(
              (post.categories && post.categories[0]) ||
              "Governance, Regulation & Policy"
            ).toUpperCase()}
          </p>
          <h2
            className={`mx-auto mt-2 font-semibold leading-[1.18] text-black line-clamp-2 ${
              isTopCard
                ? "max-w-155 text-[clamp(28px,2.2vw,40px)]"
                : "max-w-130 text-[clamp(24px,1.8vw,32px)]"
            }`}
          >
            {post.title}
          </h2>
        </div>

        <div
          className={`mt-7 overflow-hidden bg-[#d9d9d9] transition-transform duration-300 ease-out group-hover:scale-[1.01] ${
            isTopCard ? "h-95.5" : "h-76"
          }`}
        >
          {post.mainImage?.asset ? (
            <img
              src={urlFor(post.mainImage)
                .width(1200)
                .height(isTopCard ? 760 : 608)
                .fit("crop")
                .url()}
              alt={post.mainImage.alt || post.title}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : null}
        </div>
      </>
    );

    return (
      <Link
        key={post._id}
        href={href}
        aria-label={post.title}
        className="group block w-full rounded-lg outline-none transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(39,25,110,0.12)] focus-visible:ring-2 focus-visible:ring-[#3200eb] focus-visible:ring-offset-4 p-5"
      >
        {cardContent}
      </Link>
    );
  };

  return (
    <main className="mb-10 mt-5 mx-5 box-border bg-white max-[1060px]:m-0">
      <PageHeroSection
        title="Recent Blogs"
        heroBg="/figma-assets/hero-bg.jpg"
      />

      <div className="mx-auto w-full max-w-352.5 px-5 pb-16 pt-14 sm:px-11 sm:pt-16">
        {featuredPost ? (
          <section className="mx-auto w-full max-w-170">
            {renderCard(featuredPost, true)}
          </section>
        ) : null}

        <section className="mt-10 sm:mt-12">
          {remainingPosts.length === 0 && !featuredPost ? (
            <div className="rounded-xl border border-dashed border-black/20 bg-[#faf9ff] px-6 py-14 text-center">
              <h3 className="text-2xl font-medium text-[#1c1b2f]">
                No posts yet
              </h3>
              <p className="mt-2 text-[#54516f]">.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-x-10 gap-y-12 px-0 md:grid-cols-2 md:px-10">
              {(featuredPost ? remainingPosts : posts).map((post) =>
                renderCard(post),
              )}
            </div>
          )}
        </section>
      </div>

      <ContactFooterSection />
    </main>
  );
}
