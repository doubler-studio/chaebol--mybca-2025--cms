export default () => ({
  seo: {
    enabled: true,
  },
  tinymce: {
    enabled: true,
    config: {
      plugins: ["lists", "link", "image", "charmap", "table", "code", "help"],
      toolbar: "lists link image charmap table code help",
    },
  },
});
