import * as globalVars from './app.globals';
export function getHostname(): string {
  const hostname = window.location.hostname;
  let URL =  hostname !== 'localhost' ? `http://${hostname}/DispatcherRest` : globalVars.baseUrl;
  if (URL === 'http://192.168.1.23/DispatcherRest') {
    URL = 'http://192.168.1.23:8080/DispatcherRest';
  }
  if (URL === 'http://185.18.245.89/DispatcherRest') {
    URL = 'http://185.18.245.89:9090/DispatcherRest';
  }
  return URL;
}
export function getPaginationRange(c, m) {
  const current = c,
      last = m,
      delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [];
    let l;

  for (let i = 1; i <= last; i++) {
      if (i === 1 || i === last || i >= left && i < right) {
          range.push(i);
      }
  }

  for (const i of range) {
      if (l) {
          if (i - l === 2) {
              rangeWithDots.push(l + 1);
          } else if (i - l !== 1) {
              rangeWithDots.push('...');
          }
      }
      rangeWithDots.push(i);
      l = i;
  }

  return rangeWithDots;
}

export function switchToView(name: string) {
  const nav = document.querySelector(name);
  if (nav) { nav.scrollIntoView({
    behavior: 'smooth', block: 'start', inline: 'nearest'
  }); }
}