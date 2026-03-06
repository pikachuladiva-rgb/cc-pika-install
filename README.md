# cc-pika-install

One-command installer for Claude Code with automatic custom configuration.

## Quick Start

Run this single command to install and configure Claude Code:

```bash
npx cc-pika-install
```

**Note:** On Linux/macOS, you may need to use `sudo`:
```bash
sudo npx cc-pika-install
```

## What It Does

This installer automates the entire Claude Code setup process:

1. ✅ Installs Claude Code globally via npm
2. ✅ Prompts you for your API Base URL
3. ✅ Prompts you for your API Key
4. ✅ Creates `~/.claude/settings.json` with your configuration
5. ✅ Configures permissions and skips onboarding

After installation completes, simply run `claude` to start using Claude Code.

## Requirements

- **Node.js 18 or newer** - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **sudo access** (on Linux/macOS for global installation)

## Step-by-Step Usage

1. **Run the installer:**
   ```bash
   npx cc-pika-install
   ```

2. **Enter your API Base URL when prompted:**
   ```
   Enter API Base URL: https://your-api-endpoint.com
   ```

3. **Enter your API Key when prompted:**
   ```
   Enter your API key: sk-your-api-key-here
   ```

4. **Wait for installation to complete:**
   ```
   Installing Claude Code via npm...
   Configuring Claude Code...
   Configuration complete! Claude Code is ready to use.
   ```

5. **Start using Claude Code:**
   ```bash
   claude
   ```

## Configuration

The installer creates `~/.claude/settings.json` with:
- Custom API endpoint (ANTHROPIC_BASE_URL)
- Your API authentication token
- Bypass permissions mode enabled
- Onboarding steps skipped

## Troubleshooting

**Permission denied error:**
- Use `sudo npx cc-pika-install` on Linux/macOS
- Run as Administrator on Windows

**Node.js not found:**
- Install Node.js 18+ from https://nodejs.org/

## License

MIT
