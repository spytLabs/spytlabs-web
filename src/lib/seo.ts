import type { Metadata } from "next";
import { company } from "./company";

const ORG_ID = `${company.url}/#organization`;
const WEBSITE_ID = `${company.url}/#website`;

type PageMetadataInput = {
  // Without the brand: the root layout's title template appends it
  title: string;
  description: string;
  path: string;
  image?: string;
  // The home page sits in the layout's own segment, so the title template doesn't apply to it
  absoluteTitle?: boolean;
};

// A page's openGraph block replaces the layout's wholesale, so every page has to restate it
export function pageMetadata({ title, description, path, image = "/og/default.jpg", absoluteTitle = false }: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${company.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_LK",
      siteName: company.name,
      title: fullTitle,
      description,
      url: path,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": ORG_ID,
        name: company.name,
        legalName: company.legalName,
        url: `${company.url}/`,
        logo: { "@type": "ImageObject", url: `${company.url}/logo-schema.png` },
        image: `${company.url}/og/default.jpg`,
        description: company.description,
        email: company.email,
        telephone: company.phone,
        areaServed: "Worldwide",
        address: { "@type": "PostalAddress", addressLocality: company.city, addressCountry: company.countryCode },
        sameAs: Object.values(company.social),
        founder: company.founders.map((person) => ({
          "@type": "Person",
          name: person.name,
          jobTitle: person.role,
          sameAs: person.linkedin,
        })),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: company.email,
          telephone: company.phone,
          availableLanguage: ["en"],
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${company.url}/`,
        name: company.name,
        publisher: { "@id": ORG_ID },
        inLanguage: "en",
      },
    ],
  };
}

function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${company.url}${item.path === "/" ? "/" : item.path}`,
    })),
  };
}

export function serviceGraph(input: { name: string; serviceType: string; description: string; path: string; crumb: string }) {
  const url = `${company.url}${input.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: input.name,
        serviceType: input.serviceType,
        description: input.description,
        url,
        provider: { "@id": ORG_ID },
        areaServed: "Worldwide",
      },
      breadcrumbs([{ name: input.crumb, path: input.path }]),
    ],
  };
}

// For /contact, /about and /work, where the page itself is the thing being described
export function webPageGraph(input: { type: "ContactPage" | "AboutPage" | "CollectionPage" | "WebPage"; name: string; path: string; crumb?: string }) {
  const url = `${company.url}${input.path === "/" ? "/" : input.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": input.type,
        "@id": `${url}#webpage`,
        url,
        name: input.name,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
      },
      ...(input.crumb ? [breadcrumbs([{ name: input.crumb, path: input.path }])] : []),
    ],
  };
}

export function caseStudyGraph(input: { name: string; description: string; path: string; client: string }) {
  const url = `${company.url}${input.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#casestudy`,
        name: input.name,
        description: input.description,
        url,
        creator: { "@id": ORG_ID },
        about: input.client,
      },
      breadcrumbs([
        { name: "Work", path: "/work" },
        { name: input.client, path: input.path },
      ]),
    ],
  };
}
