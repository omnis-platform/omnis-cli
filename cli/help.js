const chalk = require('chalk')

const help = () => {
  console.log(chalk.yellow('Omnis-cli help \n'))
  console.log('omnis i  (init)                         Open project root directory and use this command for install dependencies  \n')
  console.log('omnis v  (version)                      Show currnet module version  \n')
  console.log('omnis h  (help)                         Show module manual  \n')
  console.log('omnis c  (config)  <key> <value>        Change default configuration \n')
  console.log('omnis s  (status)                       Show application statue')
}

module.exports = help