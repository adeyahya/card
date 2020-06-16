'use strict'

const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};

const scheme = {
  primary: chalk.rgb(172, 20, 90),
  secondary: chalk.cyan,
  light: chalk.white,
  shade: chalk.gray,
};

const data = {
  name: scheme.primary.bold('                  Ade Yahya Prasetyo'),
  work: scheme.light('Software Engineer'),
  twitter: scheme.shade('https://twitter.com/') + scheme.secondary('adeyahya'),
  npm: scheme.shade('https://npmjs.com/') + scheme.secondary('~adeyahya'),
  github: scheme.shade('https://github.com/') + scheme.secondary('adeyahya'),
  linkedin: scheme.shade('https://linkedin.com/in/') + scheme.secondary('adeyahya'),
  web: scheme.secondary('https://www.ihavemind.com'),
  npx: scheme.shade('npx ') + scheme.secondary('adeyahya'),
  labelWork: scheme.light.bold('       Work:'),
  labelTwitter: scheme.light.bold('    Twitter:'),
  labelnpm: scheme.light.bold('        npm:'),
  labelGitHub: scheme.light.bold('     GitHub:'),
  labelLinkedIn: scheme.light.bold('   LinkedIn:'),
  labelWeb: scheme.light.bold('        Web:'),
  labelCard: scheme.light.bold('       Card:')
};

const newline = '\n'
const heading = `${data.name}`
const working = `                 ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading + newline + // data.name
               working + newline + // data.work
               newline + newline + // Blank line
               webing + newline + // data.labelWeb + data.web
               linkedining + newline + newline + // data.labelLinkedIn + data.linkedin
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               npming + newline + newline + // data.labelnpm + data.npm
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), scheme.primary(boxen(output, options)))

