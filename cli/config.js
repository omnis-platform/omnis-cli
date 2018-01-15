const fs = require('fs')
const path = require('path')
const configJson = require('./config.json')
const chalk = require('chalk')

const config = (key, val) => {
  if (configJson[key]) {
    configJson[key] = val

    fs.writeFileSync(
      path.join(__dirname, './config.json'), JSON.stringify(configJson),
      err => err && console.log(err)
    )    

  } else {
    console.log(chalk.red(`Key ${key} doesn't exist`))
    progress.exit(-1)
  }
}

module.exports = config