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
const packageNameNode = configJson.packageNameNode
const installCmd = packageManeger === 'npm' ? 'install -s' : 'add'

const install = opt => {
  spinner.start()

  return new Promise((resolve, reject) => {
    let inst
    const cd = spawn('cd', [process.cwd()])

    if (opt === 'node') {
      inst = spawn(packageManeger, [installCmd, packageNameNode])
    } else {
      inst = spawn(packageManeger, [installCmd, packegeName])
    }
  
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

const init = opt => {
  console.log(chalk.cyan(figlet.textSync('Omnis CLI')))
  console.log(chalk.cyan('Initialize Omnis project'))

  install(opt)
    .then(() => {
      spinner.stop()
      console.log(chalk.cyan('\nOmnis dependencies successfully installed'))
      generate()
    })
    .catch(() => process.exit(-1))
}

module.exports = init