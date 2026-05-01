/// <reference types="vite" />
import { resolve } from "path";
import { defineConfig, esmExternalRequirePlugin } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        dts({
            rollupTypes: true,
            insertTypesEntry: true
        }),
        esmExternalRequirePlugin(),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "VideoPlayer",
            fileName: (format) => `video-player.${format === "es" ? "mjs" : "cjs"}`,
            formats: ["es", "cjs"],
        },
        rolldownOptions: {
            external: ["hls.js"],
            output: {
                globals: {
                    "hls.js": "Hls"
                },
            },
        },
        minify: false
    },
    root: ".",
    server: {
        open: "./demo/index.html"
    }
});