
# react-ab

This address book application is powered by MongoDB, Express, React (Next.js), Node.js and Docker. Its purpose is to demonstrate the basic implementation of an application built on the MERN stack to run within Docker microservices.

## Table of Contents

**[Prerequisites](#prerequisites)**<br>
**[Usage Instructions](#usage-instructions)**<br>
**[Debugging](#debugging)**<br>

## Prerequisites

### Visual Studio Code

[Download](https://code.visualstudio.com/download) and install Visual Studio Code.

### Docker Desktop

[Download](https://www.docker.com/products/docker-desktop) and install Docker Desktop.

### Node.js

#### Installer

[Download](https://nodejs.org/) Node.js using the installer.

#### Homebrew (macOS)

Install Homebrew:

```console
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Make sure Homebrew is up to date:

```console
brew update
```

Make sure your system is ready:

```console
brew doctor
```

Add Homebrew's location to your `$PATH` in `.bash_profile` or `.zshrc` file.

```console
export PATH="/usr/local/bin:$PATH"
```

Install Node.js:

```console
brew install node
```

## Usage Instructions

1. Download or clone this repository.
2. Edit the `.env.sample` file and set the environment variables within to your desired values. Once finished, rename the file to `.env`. This file is used to substitute environment variables in your Compose files.
3. Edit the `dev.env.sample` and `prod.env.sample` files and set the environment variables within to your desired values. Once finished, rename them to `dev.env` and `prod.env`. These are used for your Development and Production builds respectively. Note: The `NODE_ENV` variable is already set in these files and should **not** be changed.
4. Navigate to the `.vscode/` folder and update the `react-ab.code-workspace.sample` file per the instructions within. Once finished, rename it to `react-ab.code-workspace`. This file is used to specify the location of your workspace.

> :warning: The `MONGO_SERVICENAME` variable is set to `mongo` by default and **must match the name of the Mongo service names in both Compose files**.

### Development

Navigate to the project root and build the Compose file for Development:

```console
docker-compose -f docker-compose.dev.yml build
```

Bring up the Compose file for Development:

```console
docker-compose -f docker-compose.dev.yml up
```

Navigate to `localhost:${UI_PORT}` (where `${UI_PORT}` is the value that you set in your `.env` file) in your browser to view the application.

### Production

Navigate to the project root and build the Compose file for Production:

```console
docker-compose -f docker-compose.prod.yml build
```

Bring up the Compose file for Production:

```console
docker-compose -f docker-compose.prod.yml up
```

Navigate to `localhost:${UI_PORT}` (where `${UI_PORT}` is the value that you set in your `.env` file) in your browser to view the application.

## Debugging

Two debugging configurations are included in this project's `launch.json`. You can use Visual Studio Code's built-in debugger to attach to the API and UI microservices within this project. Debugging is only available for Development. Read more about how debugging in Code works [here](https://code.visualstudio.com/docs/editor/debugging).

### API

Begin by [building and running the development](#development) environment. Use the `Docker: Attach to API (Node)` configuration to attach the debugger to a running API container. The source for this service is located within the `${workspaceFolder}/api/src` folder.

### UI

Begin by [building and running the development](#development) environment. Use the `Docker: Attach to UI (Next.js)` configuration to attach the debugger to a running UI container. The source for this service is located within the `${workspaceFolder}/ui/src` folder.
