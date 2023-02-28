chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "changeDom.js"});
	var request = new XMLHttpRequest(); 
	request.open("GET", 'http://www.url.com');
	request.onreadystatechange = function() { 
	if (request.readyState === 4 && request.status === 200) {

	//response handling code

	}
	};
	request.send(null); // Send the request now
});
