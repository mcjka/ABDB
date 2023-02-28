function onStartedDownload(id) {
  console.log(`Started downloading: ${id}`);
}

function onFailed(error) {
  console.log(`Download failed: ${error}`);
}

let downloadUrl = "https://google.com";

let downloading = browser.downloads.download({
  url : downloadUrl,
  filename : 'asite.html',
  conflictAction : 'uniquify'
});

downloading.then(onStartedDownload, onFailed);
