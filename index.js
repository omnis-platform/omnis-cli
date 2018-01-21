#!/usr/bin/env node
const program = require('commander')
const init = require('./cli/init')
const version = require('./cli/version')
const help = require('./cli/help')
const config = require('./cli/config')
const activate = require('./cli/activate')
const status = require('./cli/status')

program
  .command('init')
  .alias('i')
  .description('init omnis project')
  .action(() => init())

program
  .command('version')
  .alias('v')
  .description('omnis-cli version')
  .action(() => version())

program
  .command('help')
  .alias('h')
  .description('omnis-cli help')
  .action(() => help())

program
  .command('config')
  .alias('c')
  .arguments('<key> [value]')
  .description('change default values')
  .action((key, val) => config(key, val))

program
  .command('activate')
  .alias('a')
  .description('activate omnis project')
  .action(() => activate())

program
  .command('status')
  .alias('s')
  .description('check application status')
  .action(() => status())

program.parse(process.argv)