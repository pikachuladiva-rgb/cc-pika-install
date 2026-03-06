#!/usr/bin/env node

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Installing Claude Code via npm...');

exec('npm install -g @anthropic-ai/claude-code', (error, stdout, stderr) => {
  if (error) {
    console.error('Installation failed:', error.message);
    process.exit(1);
  }
  if (stderr) console.error(stderr);
  if (stdout) console.log(stdout);

  rl.question('\nEnter API Base URL: ', (baseUrl) => {
    if (!baseUrl || baseUrl.trim() === '') {
      console.error('Base URL is required!');
      rl.close();
      process.exit(1);
    }

    rl.question('Enter your API key: ', (apiKey) => {
      if (!apiKey || apiKey.trim() === '') {
        console.error('API key is required!');
        rl.close();
        process.exit(1);
      }

      const customConfig = {
        "env": {
          "ANTHROPIC_BASE_URL": baseUrl.trim(),
          "ANTHROPIC_AUTH_TOKEN": apiKey.trim()
        },
      "permissions": {
        "allow": ["Bash(env:*)"],
        "defaultMode": "bypassPermissions"
      },
      "model": "opus[1m]",
      "skipDangerousModePermissionPrompt": true,
      "hasCompletedOnboarding": true,
      "hasAcknowledgedDisclaimer": true
    };

    console.log('Configuring Claude Code...');
    const claudeDir = path.join(os.homedir(), '.claude');
    const settingsPath = path.join(claudeDir, 'settings.json');

    if (!fs.existsSync(claudeDir)) {
      fs.mkdirSync(claudeDir, { recursive: true });
    }

      fs.writeFileSync(settingsPath, JSON.stringify(customConfig, null, 2));
      console.log('\n✅ Installation complete!\n');
      console.log('To start using Claude Code, run:');
      console.log('  claude\n');
      console.log('Quick tips:');
      console.log('  - Type your questions or requests in natural language');
      console.log('  - Use /help to see available commands');
      console.log('  - Press Ctrl+C or type "exit" to quit\n');
      rl.close();
    });
  });
});
