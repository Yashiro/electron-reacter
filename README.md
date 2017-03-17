# electron-reacter
## A quick starter of Electron app with react.

## usage:
### To dev:
1. clone the code to your-app dir:  
    `git clone https://github.com/evolify/electron-reacter.git your-app`
2. enter your-app dir:  
    `cd your-app`  
3. install the modules:  
    `npm install`  
4. use webpack to build the code:  
    `npm run dev` or `webpack --watch`  
5. run your app(with the electron-reload):  
    `npm run app` or `electron app`  
Then you can whrite your code in the src dir and just save,the webpack will auto-rebuild your code to the app dir and the electron-reload will auto-refresh the app.  

### To build:  
just run `npm run build` or `webpack` in your-app dir,then the app code will packed into the app dir,you can package it to an executable file as you like.