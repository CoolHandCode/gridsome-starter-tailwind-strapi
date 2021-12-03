export function getStrapiMedia(url) {
    // Check if URL is a local path
    if (url.startsWith("/")) {
        return `${
      process.env.GRIDSOME_STRAPI_URL || "https://strapi1.digitalstate.co.uk"
    }${url}`;
    }
    // Otherwise return full URL
    return url;
}