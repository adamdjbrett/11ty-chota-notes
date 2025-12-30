import { DateTime } from "luxon";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "public": "/" });
  eleventyConfig.addWatchTarget("public/css/chota.css");

  // Add date filter (engine-agnostic) with robust Luxon handling
  eleventyConfig.addFilter("date", function(dateObj, format = "yyyy-LL-dd") {
    if (!dateObj) return "";

    let dt;
    if (typeof dateObj === "string") {
      dt = DateTime.fromISO(dateObj, { zone: "utc" });
      if (!dt.isValid) dt = DateTime.fromJSDate(new Date(dateObj), { zone: "utc" });
    } else if (dateObj instanceof Date) {
      dt = DateTime.fromJSDate(dateObj, { zone: "utc" });
    } else if (dateObj && typeof dateObj.toJSDate === "function") {
      // Handle objects that expose toJSDate (defensive)
      try {
        dt = DateTime.fromJSDate(dateObj.toJSDate(), { zone: "utc" });
      } catch (e) {
        dt = DateTime.fromJSDate(new Date(dateObj), { zone: "utc" });
      }
    } else {
      dt = DateTime.fromJSDate(new Date(dateObj), { zone: "utc" });
    }

    return dt.toFormat(format);
  });
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  // Collections
  eleventyConfig.addCollection("posts", (collection) => {
    return collection
      .getFilteredByGlob("content/blog/**/*.md")
      .filter(p => !p.data.draft)
      .sort((a, b) => (a.date > b.date ? -1 : 1));
  });

  // Return directory structure
  return {
    dir: {
      input: "content",
      includes: "_includes",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"]
  };
}
