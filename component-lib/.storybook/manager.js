// .storybook/manager.js
import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

function setFavicon(url) {
  const link =
    document.querySelector("link[rel~='icon']") ||
    document.createElement("link");
  link.rel = "icon";
  link.type = "image/x-icon"; // Change to "image/x-icon" if using .ico
  link.href = url;
  document.getElementsByTagName("head")[0].appendChild(link);
}

addons.setConfig({
  theme: create({
    base: "light", // You can change this to 'dark' if you prefer a dark theme

    // Custom branding options
    brandTitle: "My Storybook", // The title that appears in the header
    brandUrl: "#", // Optional: URL when clicking the title
    brandImage: "icon.png", // Replace with your logo's path or URL
  }),
});
