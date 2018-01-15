const path = require('path')
const package = require(`${path.dirname(require.main.filename)}/package.json`)
const chalk = require('chalk')
const figlet = require('figlet')

const version = () => {
  console.log(
    chalk.cyan(
      figlet.textSync('Omnis CLI', { horizontalLayout: 'full' })
    )
  )

  console.log(
    chalk.cyan(
      `Version: ${package.version}`
    )
  )
}

module.exports = version