const scripts = [];
const styles = [];
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
