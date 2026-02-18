# pi-aliases

A [pi](https://github.com/badlogic/pi-mono) extension that adds familiar command aliases.

| Alias    | Maps to | Description                          |
|----------|---------|--------------------------------------|
| `/clear` | `/new`  | Clear conversation, start new session |
| `/quit`  | `/exit` | Exit pi                              |

## Install

```bash
pi install npm:pi-aliases
```

Or from git:

```bash
pi install git:github.com/xRyul/pi-aliases
```

## Development

Clone and symlink into your extensions directory:

```bash
git clone https://github.com/xRyul/pi-aliases.git
ln -s "$(pwd)/pi-aliases" ~/.pi/agent/extensions/pi-aliases
```

Then use `/reload` in pi to pick up changes.

## License

MIT
