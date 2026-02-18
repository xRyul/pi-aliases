/**
 * Pi Aliases Extension
 *
 * Silently redirects command aliases via input interception:
 *   /clear → /new  (start a new session)
 *   /exit  → /quit (exit pi)
 *
 * These don't appear in autocomplete — they just work when typed.
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
  pi.on("input", async (event, _ctx) => {
    const target = aliases[event.text.trim()];
    if (target) {
      return { action: "transform", text: target };
    }
    return { action: "continue" };
  });
}
