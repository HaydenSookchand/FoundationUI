// src/components/index.js
const req = require.context("./", false, /Metadata\.js$/);
const components = {};

req.keys().forEach((fileName) => {
  const metadata = req(fileName).default;
  components[metadata.name] = metadata;
});

export default components;
