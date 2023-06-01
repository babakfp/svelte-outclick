import adapter from "@sveltejs/adapter-vercel"
import { vitePreprocess } from "@sveltejs/kit/vite"

/** @type {import("@sveltejs/kit").Config} */
export default {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter(),
        alias: {
            "svelte-outclick": "src/package/OutClick.svelte",
        },
    },
}
