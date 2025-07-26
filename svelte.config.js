import path from "path";
import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
  preprocess: vitePreprocess({
    postcss: true,
  }),
  kit: {
    adapter: adapter(),
    alias: {
      $lib: path.resolve("src/lib"),
      "$lib/server": path.resolve("src/lib/server"),
      "$lib/stores": path.resolve("src/lib/stores"),
      "$lib/types": path.resolve("src/lib/types"),
      $stores: path.resolve("src/stores"),
      $types: path.resolve("src/types"),
    },
  },
};

export default config;
