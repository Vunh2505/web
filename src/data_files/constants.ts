import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "A4B",
  tagline: "Driving Excellence in Digital Solutions",
  description: "A4B specializes in delivering cutting-edge digital solutions, including xPlatform for seamless integration, xFlow for process optimization, xFile for document management, iSign for digital signing, and xBot for intelligent automation. Our expertise empowers businesses to streamline operations, enhance user experiences, and achieve sustainable growth. Contact our team today to transform your digital strategy with unparalleled quality and innovation.",
  description_short: "A4B provides advanced digital solutions to streamline processes, improve user experiences, and drive business efficiency.",
  url: "https://a4b-landing.netlify.app/",
  author: "xx",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Digital Solutions for Business Excellence`,
  description: "Transform your business operations with A4B's innovative digital solutions. Trusted by industry leaders, A4B provides simplicity, scalability, and reliability through platforms like xPlatform for seamless integration, xFlow for process optimization, xFile for document management, and xBot for intelligent automation. Experience the difference with user-centric design and cutting-edge technology. Start your digital transformation journey today!",
  image: ogImageSrc,
};
