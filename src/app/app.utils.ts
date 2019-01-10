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
