/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        setupFiles: ["./tests/setup.ts"],
        globals: true,
        environment: "jsdom",

        include: ["tests/**/*.test.ts"],
        exclude: ["**/node_modules/**", "**/dist/**"],

        coverage: {
            provider: "v8",
            reporter: ["text", "json", "html"],
            include: ["src/**/*.ts"],
        },

        typecheck: {
            enabled: true
        }
    }
});