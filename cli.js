#!/usr/bin/env node
// eslint-disable-file no-console
const program = require('commander')
const VERSION = require('./package.json').version

program
  .version(VERSION)
  .description('Guld standardized CLI for git.')
  .option('-u, --user', 'The user name to set up.')
  .option('-r, --recipient', 'The recipient of a message or transaction.')
  .option('-f, --fingerprint', 'The PGP fingerprint to sign with.')
  // .option('-q, --quiet', '')
  .command('path', 'Blocktree path resolution tools.')
  .command('config', 'Configuration manager for git config files.')
  .command('host', 'Configuration manager for git hosts.')
  // .command('remote', 'Manage git remotes the guld way.')


program.parse(process.argv)
