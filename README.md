# Omnis-CLI
node module for integration with [Omnis Platform](https://omnis-platform.com)

---

+ [Installation](#instalation)
+ [Quick Start](#quick-start)
+ [Options](#options)
  - [Init](#init)
  - [Status](#status)
  - [Activate](#activate)
  - [Deactivate](#Deactivate)


### Installation

For inststll `omnis-cli` use one of command

```
yarn global add omnis-cli
```

or

```
npm install omnis-cli --global
```

### Quick Start

1. Install `omnis-cli` via `npm install omnis-cli --global`
2. Change current directory to project directory
3. Run `omnis-cli init` in project directory

<br/>
<br/>

## Options

### Init

```
omnis-cli init
```

Init option used for initializing dependencies inside project directory and generating empty `omnis.json` file. Before running this command make sure that you `package.json` file and `node_modules` folder are in the same directory.

### Status

```
omnis-cli status
```

The Status option used for checking the current status of the application and return `true` or `false`

### Activate

```
omnis-cli activate
```

The active option used for changing application activation status to `true`, that allow to getting a data from it.

### Deactivate

```
omnis-cli deactivate
```

The Deactivate option used for changing application activation status to `false`, that disallow to getting a data from it.