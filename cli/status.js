const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
const chalk = require('chalk')

const makeRequest = (appName, token) => {
  fetch(`https://omnis-platform.com/api/service/application/${appName}/application_status`, { 
    method: 'GET', 
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Origin': 'omnis-platform.com',
      'X-Auth-Token': token
    }
  })
  .then(res => res.json())
  .then(res => console.log(chalk.cyan(`Application status ${res.status}`)))
  .catch(err => console.log(chalk.red(`Exited with error ${err}`)))
}

const generateAuthHeader = () => {
  const omnis = require(path.join(process.cwd(), 'omnis.json'))

  if (omnis.appId) {
    const token = new Buffer(`${omnis.userSecret}${omnis.appId}${omnis.apiKey}${omnis.app}`).toString('base64')
    makeRequest(omnis.app, token)
  } else {
    console.log(chalk.red("Generate config file on application settings page"))
  }
}

const status = () => {
  if (fs.existsSync(path.join(process.cwd(), 'omnis.json'))) {
    generateAuthHeader()
  } else {
    console.log(chalk.red("omnis.json doesn't exist"))
  }
}

module.exports = status