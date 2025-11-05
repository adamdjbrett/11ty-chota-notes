import { DateTime } from "luxon";

export default function(eleventyConfig) {
  // Passthrough any static assets (images, etc.)
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  
  // Copy Chota CSS from node_modules to /css/
  eleventyConfig.addPassthroughCopy({ "node_modules/chota/dist/chota.min.css": "css/chota.min.css" });

  // Add date filter for Nunjucks
  eleventyConfig.addNunjucksFilter("date", function(dateObj, format = "yyyy-LL-dd") {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });

  // Collections
  eleventyConfig.addCollection("posts", (collection) => {
    return collection
      .getFilteredByGlob("src/blog/**/*.md")
      .filter(p => !p.data.draft)
      .sort((a, b) => (a.date > b.date ? -1 : 1));
  });

  // Return directory structure
  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"]
  };
}
