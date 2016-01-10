# About
fleo-authentication service is a token-based authentication service for all fleo applications across all devices.

# Development Setup

### System Prerequisites
* [node.js](https://nodejs.org/)
* [mongodb](https://www.mongodb.org/)

### Clone the Repo
```
git clone https://github.com/bryanlvenable/fleo-authentication
```

### Install Dependancies
```
cd fleo-authentication
npm install
```

### Configure Service
```
cp ./config/properties.template.json ./config/proerties.json
```
Replace "SECRET-HERE" in `./config/propeties.json` with actual secret

Note: do **NOT** push this secret to Github! There is a reason this file is in `.gitignore`.

### Run Service
```
node server.js
```

### Development Setup Troubleshooting
* Ensure mongodb is running in another tab
```
mongod
```
* Changes in dependancies could break your local service, update them with
```
npm install
```
