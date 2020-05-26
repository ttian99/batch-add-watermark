import { ipcMain, dialog, BrowserWindow, app } from "electron";

ipcMain.on('open-dialog', (event, config) => {
    dialog.showOpenDialog(null, config).then(result => {
        event.reply(result.filePaths);
    }).catch(err => {
        console.log(err);
    })
})