const {app,BrowserWindow}=require('electron');
const handler=require('./MainHandler');
const path=require('path');
let win;

require('electron-reload')(path.resolve(__dirname,'/..'), {
        ignored: /node_modules|[\/\\]\./
    });

function createWindow(){
	win=new BrowserWindow({
		width:700,
		height:500,
		frame:true,
		resizable:false,
		transparent:false
	});

	win.loadURL(`file://${__dirname}/../view/app.html`);

	win.on('close', ()=> {
		win=null;
	});

	handler.start();
}

app.on('ready', createWindow);

app.on('window-all-closed',()=>{
	if (process.platform!=='darwin') {
		app.quit();
	}
});

app.on('activate', ()=>{
	if (win===null) {
		createWindow();
	}
});