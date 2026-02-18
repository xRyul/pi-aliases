/**
 * Pi Aliases Extension
 *
 * Adds familiar command aliases:
 *   /clear → /new  (start a new session)
 *
 * Install:
 *   pi install npm:pi-aliases
 *   pi install git:github.com/xRyul/pi-aliases
 *
 * Or symlink to ~/.pi/agent/extensions/pi-aliases
 */

import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

export default function (pi: ExtensionAPI) {
  // /clear → /new (start a new session)
  pi.registerCommand("clear", {
    description: "Clear conversation and start a new session (alias for /new)",
    handler: async (_args, ctx) => {
      await ctx.newSession();
    },
  });

}
