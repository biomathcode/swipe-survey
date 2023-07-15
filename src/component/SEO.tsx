import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

const defaultMeta = {
  title: "Swipe Survery - Yes/No Survey",
  siteName: "SwipeSurvey",
  description:
    "SwipeSurvey creates funnel Survey which lead to decision making",
  url: "https://coolhead.in",
  type: "website",
  robots: "follow, index",

  image: "https://coolhead.in/images/og.jpeg",
};

const StructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Software",
    headline: "Swipe Survery - Yes/No Survey",
    description:
      "SwipeSurvey creates funnel Survey which lead to decision making",
    author: {
      "@type": "Person",
      name: "Pratik Sharma",

      url: "https://blog.coolhead.in",
    },
    publisher: {
      "@type": "Organization",
      name: "Coolhead",
      url: "https://blog.coolhead.in",
    },
    image: {
      "@type": "ImageObject",
      url: "https://coolhead.in/images/og.jpeg",
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    isAccessibleForFree: "http://schema.org/True",
  },
  {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Pratik Sharma",
    url: "https://coolhead.in",
    image: "",
    sameAs: [
      "https://twitter.com/biomathcode",
      "https://instagram.com/biomathcode",
      "https://github.com/biomathcode",
      "https://coolhead.in",
    ],
    jobTitle: "Web Developer",
  },
  {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Coolhead",
    alternateName: "Blog Coolhead",
    url: "https://coolhead.in",
    logo: "https://webstory.coolhead.in/apple-icon.png",
  },
];

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta["title"] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content={meta.robots} />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${meta.url}${router.asPath}`} />
        <link rel="canonical" href={`${meta.url}${router.asPath}`} />
        {/* Open Graph */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="image" property="og:image" content={meta.image} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@biomathcode" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta
          name="keywords"
          content="react, web developer, fullstack developer, python, rust, pratik, sharma, "
        />
        {meta.date && (
          <>
            <meta property="article:published_time" content={meta.date} />
            <meta
              name="publish_date"
              property="og:publish_date"
              content={meta.date}
            />
            <meta
              name="author"
              property="article:author"
              content="Pratik Sharma"
            />
          </>
        )}

        {/* Favicons */}
        {favicons.map((linkProps) => (
          <link key={linkProps.href} {...linkProps} />
        ))}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Script
        id="newsArticle"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(StructuredData[0]),
        }}
      />
      <Script
        id="author"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(StructuredData[1]),
        }}
      />
      <Script
        id="website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(StructuredData[2]),
        }}
      />
    </>
  );
}

const favicons: Array<React.ComponentPropsWithoutRef<"link">> = [
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon-16x16.png",
  },
  { rel: "manifest", href: "/favicon/site.webmanifest" },
  {
    rel: "mask-icon",
    href: "/favicon/safari-pinned-tab.svg",
    color: "#00e887",
  },
  { rel: "shortcut icon", href: "/favicon/favicon.ico" },
];
