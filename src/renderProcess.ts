import { $, jsonFormat } from "./utils";
import { ipcRenderer, netLog } from "electron";

function main() {
    const addImageBtn = $("addImageBtn");
    addImageBtn.onclick = () => {
        console.log('=========> addImageBtn onclick');
        const config: Electron.OpenDialogOptions = {
            title: '选择文件夹',
            buttonLabel: '选择',
            properties: ['openDirectory']
        }
        const comfirmCb = (filePaths: Array<string>) => {
            console.log('filePaths comfirm: ' + JSON.stringify(filePaths));
        };

        const cancelCb = (filePaths: Array<string>) => {
            console.log('filePaths cancel: ' + JSON.stringify(filePaths));
        }
        ipcRenderer.send('open-dialog', config, jsonFormat(comfirmCb), jsonFormat(cancelCb));
    }

    const watermarkImg = $('watermarkImg');
    watermarkImg.onclick = () => {
        console.log('=========> watermarkImg onclick');
        const config: Electron.OpenDialogOptions = {
            title: '选择文件夹',
            buttonLabel: '选择',
            filters: [{ name: '图片', extensions: ['png', 'jpg'] }],
            properties: ['openFile']
        }
        ipcRenderer.send('open-dialog', config);
    }
}

main();