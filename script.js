//your JS code here. If required.
let browserInfo = document.querySelector('#browser-info');

function displayBrowserHistory(){
    const browserName = navigator.appName;
    const version = navigator.appVersion;

    const msg = `You are using ${browserName} version ${version}`;
    browserInfo.textContent = msg;
}

displayBrowserHistory();