# CS180: NBA Analysis Project
## Intro

NBA Game Data Visualizer and Analyzer, built with React and node.js.

Data from 2004 to 2020, provided by Kaggle: (https://www.kaggle.com/datasets/nathanlauga/nba-games)

## Installation
### Dependencies
#### npm
Install Node Version Manager (nvm) from [here](https://github.com/nvm-sh/nvm) to install the latest version of npm:

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
nvm install node
nvm use node
```

#### React
cd to `Frontend` and run the following:
`npm install react-scripts`

#### Backend
cd to `BackEnd` and run the following:
`npm install express body-parser cors --save`

## Usage
### Backend
cd to `BackEnd` and run the following:

`nodemon server.js`

The backend is hosted at port `8080`
### Frontend
cd to `FrontEnd` and run the following:

`npm start`

The frontend is hosted at port `3000`

## Troubleshooting
'ERR_OSSL_EVP_UNSUPPORTED' may happen when using OpenSSL 3.0. 
To fix, change the following lines in`package.json` in `FrontEnd`:
```
    "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts --openssl-legacy-provider build",
```
