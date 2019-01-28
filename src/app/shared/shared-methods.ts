import { SharedService } from 'src/app/shared/shared.service';
import { getHostname } from '../app.utils';
const scripts = [];
const styles = [];
export function getCurentLocale(): string {
  return localStorage.getItem('kg-language') || 'en';
}

export function loadExternalScripts(url: string) {

 const isLoaded = scripts.find(scr => scr === url);
 if (isLoaded) { return Promise.resolve(true); }
  return new Promise((resolve, reject) => {
    const scriptElement = document.createElement('script');
    scriptElement.src = url;
    scriptElement.charset = 'utf-8';
    scriptElement.onload = resolve;
    scripts.push(url);
    document.head.appendChild(scriptElement);
  });
}
export function loadExternalStyles(url: string) {
  const isLoaded = styles.find(scr => scr === url);
  if (isLoaded) { return Promise.resolve(true); }
   return new Promise((resolve, reject) => {
     const styleElement = document.createElement('link');
    styleElement.href = url;
    styleElement.rel = 'stylesheet';
    styleElement.onload = resolve;
     styles.push(url);
     document.head.appendChild(styleElement);
   });
 }

 export function copyText(text: string, sharedService: SharedService = null) {
  const selBox = document.createElement('textarea');
  selBox.style.position = 'fixed';
  selBox.style.left = '0';
  selBox.style.top = '0';
  selBox.style.opacity = '0';
  selBox.value = text;
  selBox.id = '1000';
  selBox.setAttribute('copy-text-value', text);
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  document.execCommand('copy');
 // document.body.removeChild(selBox);
  if (sharedService) {
    sharedService.createNotification('info', 'Link copied !', 'bottomCenter');
  }
 }
 export function imgSrcParser(fileId: string) {
   const hostname = getHostname();
  return `${hostname}/api/get/file/${fileId}`;
 }
  export function addAttachFileToolbar(modal, fileManagerDialog) {
    function initFileManagerDialog(editor) {
      const dialogRef =  modal.open(fileManagerDialog);
        dialogRef.afterClosed().subscribe(res => {
          if (res) {
         editor.execCommand('mceInsertContent', false, `<a href="${res}" target="_blank" class="file-link">Link</a> &nbsp; `);
          }
        });
      }
    const conf =  {
      plugins: 'link',
      toolbar: 'addfile',
      menu: {
      },
      toolbar1: 'formatselect | bold italic strikethrough | alignleft aligncenter alignright alignjustify  | numlist bullist addfile',
      setup: (editor) => {
        editor.addButton('addfile', {
          image: './assets/img/add-file.png',
          tooltip: 'Attach link',
          onclick:  initFileManagerDialog.bind(this, editor)
        });
      }
    };
    return conf;
  }
