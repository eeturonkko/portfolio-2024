import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://eeturonkko.github.io",
  base: "portfolio-2024",
  integrations: [tailwind()],
});
