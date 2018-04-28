const chalk = require('chalk')

const help = () => {
  console.log(chalk.yellow('Omnis-cli help'))
  console.log(chalk.cyan('Visit https://omnis-platform.com \nto learn more about Omnis Platform'))
  console.log('omnis-cli i  (init)                         Open project root directory and use this command for install dependencies')
  console.log('omnis-cli v  (version)                      Show currnet module version ')
  console.log('omnis-cli h  (help)                         Show module manual')
  console.log('omnis-cli c  (config)  <key> <value>        Change default configuration')
  console.log('omnis-cli s  (status)                       Show application statue')
  console.log('omnis-cli a  (activate)                     Activate current omnis application')
  console.log('omnis-cli d  (deactivate)                   Deactivate current omnis application')
}

module.exports = help