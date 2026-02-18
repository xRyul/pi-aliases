/**
 * Pi Aliases Extension
 *
 * Silently redirects aliases to built-in commands:
 *   /clear → /new  (start a new session)
 *   /exit  → /quit (exit pi)
 *
 * No autocomplete entries — just type the alias and hit enter.
 *
 * Install:
 *   pi install npm:pi-aliases
 *   pi install git:github.com/xRyul/pi-aliases
 */

import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

const aliases: Record<string, string> = {
  "/clear": "/new",
  "/exit": "/quit",
};

export default function (pi: ExtensionAPI) {
  pi.on("input", async (event) => {
    const target = aliases[event.text.trim()];
    if (target) return { action: "transform", text: target };
  });
}
