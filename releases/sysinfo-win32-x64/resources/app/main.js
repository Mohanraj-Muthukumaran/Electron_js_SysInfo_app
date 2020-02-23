const {app, BrowserWindow} = require('electron');
const path =require('path');
const url = require('url');

//init win
let win;

function createWindow(){

    //create browser window
    win =new BrowserWindow({width:600, height:600, resizable: false, icon:__dirname+'/images/SystemConfig.png',
    webPreferences: {
        nodeIntegration: true
    }});

    //load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file:',
        slashes:true
    }));

    
    win.on('closed',() => {
        win= null;
    });
}

//Run create window function
app.on('ready',createWindow);

//Quit when all windows are closed
app.on('window-all-closed', ()=>{
    if(process.platform !=='darwin'){
        app.quit();
    }
});