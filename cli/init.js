const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const configJson = require('./config.json')
const Spinner = require('cli-spinner').Spinner
const { spawn } = require('child_process')
const spinner = new Spinner({text: chalk.cyan('%s '), stream: process.stderr }).setSpinnerString(18)
const figlet = require('figlet')

const omnisJson = { info: 'Generate config file on application settings page' }
const packageManeger = configJson.packageManeger
const packegeName = configJson.packageName
const installCmd = packageManeger === 'npm' ? 'install' : 'add'
const installOpt = packageManeger === 'npm' ? '--save' : ''

const install = () => {
  spinner.start()

  return new Promise((resolve, reject) => {
    const inst = spawn(packageManeger, [installCmd, packegeName, installOpt])
    const cd = spawn('cd', [process.cwd()])
  
    cd
      .on('close', code => code !== 0 && process.exit(-1))

    inst
      .on('close', code => code === 0 ? resolve() : reject())

    inst
      .stdout
      .on('data', data => console.log(`${data.toString().replace(/(\r\n|\n|\r)/gm, '')}`))
  })
}

const generate = () => {
  fs.writeFileSync(
    path.join(process.cwd(), 'omnis.json'), JSON.stringify(omnisJson),
    err => err && console.log(err)
  )

  console.log(chalk.cyan('Omnis project successfully initialized'))
}

const init = () => {
  console.log(chalk.cyan(figlet.textSync('Omnis CLI')))
  console.log(chalk.cyan('Visit https://omnis-platform.com to learn more about Omnis Platform'))
  console.log(chalk.cyan('Initialize Omnis project'))

  install()
    .then(() => {
      spinner.stop()
      console.log(chalk.cyan('\nOmnis dependencies successfully installed'))
      generate()
    })
    .catch(() => process.exit(-1))
}

module.exports = init