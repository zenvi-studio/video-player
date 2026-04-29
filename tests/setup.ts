import { vi } from "vitest";

Object.defineProperty(window.HTMLMediaElement.prototype, 'load', {
    value: vi.fn(),
});

Object.defineProperty(window.HTMLMediaElement.prototype, 'play', {
    value: vi.fn().mockResolvedValue(undefined),
});

Object.defineProperty(window.HTMLMediaElement.prototype, 'pause', {
    value: vi.fn(),
});

Object.defineProperty(window.HTMLMediaElement.prototype, 'paused', {
    value: true,
    writable: true,
});