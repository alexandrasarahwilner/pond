module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
    return {
      dir: {
        input: "src",
        output: "_site"
      },
      passthroughFileCopy: true,
 };
};
