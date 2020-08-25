
# react-ab

This address book application is powered by MongoDB, Express, React (Next.js), Node.js and Docker. Its purpose is to demonstrate the basic implementation of an application built on the MERN stack to run within Docker microservices.

### Table of Contents
**[Prerequisites](#prerequisites)**<br>
**[Usage Instructions](#usage-instructions)**<br>

## Prerequisites
### Visual Studio Code
[Download](https://code.visualstudio.com/download) and install Visual Studio Code.

### Docker Desktop
[Download](https://www.docker.com/products/docker-desktop) and install Docker Desktop.

### Node.js
#### Installer
[Download]((https://nodejs.org/)) Node.js using the installer.

#### Homebrew (Mac OS)
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
3. Edit the `dev.env.sample` and `prod.env.sample` files and set the environment variables within to your desired values. Once finished, rename them to `dev.env` and `prod.env`. These are used for your Development and Production builds respectively. Note: The `NODE_ENV` variable is already set in these files and should <strong>not</strong> be changed.
4. Navigate to the `.vscode/` folder and update the `react-ab.code-workspace.sample` file per the instructions within. Once finished, rename it to `react-ab.code-workspace`. This file is used to specify the location of your workspace.

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
