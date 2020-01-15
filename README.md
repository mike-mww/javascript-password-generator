# JavaScript Password Generator
Simple JavaScript application for generating passwords.

[View Demo](https://mike-mww-38340.herokuapp.com/)

## Getting Started
### Prerequisities
* [Node.js](https://nodejs.org/)

### Installation
Download repository files and run the command below to install the necessary dependency packages:
```
# Install server-side packages
npm install

# Install client-side packages
cd client/
npm install
```

Run the following commands to launch a local development server or generate a production build:
```
# Launch local development server
npm run dev

# Create a production build
npm run build
```

Also included is a **"heroku-postbuild"** script to build and deploy to Heroku.

## Built with
* [Express.js (4.17.1)](https://www.npmjs.com/package/express/v/4.17.1)
* [Webpack (4.41.2)](https://www.npmjs.com/package/webpack/v/4.41.2)
* [Babel (7.7.4)](https://www.npmjs.com/package/@babel/core/v/7.7.4)
* [Font Awesome (5.11.2)](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers)

## Usage
### Configurations
All configurations are preset by default, however at least one configuration must be set in order to generate a password string.

Password length cannot be less than **[6]** characters and cannot exceed **[24]** characters.

## Acknowledgments
This project was inspired by Florin Pop's ***"100 Days - 100 Projects Challenge"***.
* ["Password Generator" CodePen](https://codepen.io/FlorinPop17/full/BaBePej)
* ["100 Days - 100 Projects Challenge"](https://www.florin-pop.com/blog/2019/09/100-days-100-projects/)
