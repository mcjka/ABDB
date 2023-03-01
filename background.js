chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "changeDom.js"});
	function onStartedDownload(id) {
    		console.log(`Started to download: ${id}`);
  	}

  	function onFailed(error) {
    		console.log(`Something stinks: ${error}`);
  	} 

  	var startDownload = browser.downloads.download({
    		url : currentUrl,
    		filename: 'samplePage.html'
 	 });

  	startDownload.then(onStartedDownload, onFailed);
	
	
});
