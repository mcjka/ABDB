var xhr = new XMLHttpRequest();
var url = new document.URL

xhr.onload = function() {
	document.documentElement.innerHTML = this.responseXML.documentElement.outerHTML;
	document.documentElement.style.overflow = "auto";
	document.documentElement.style.position = "static";
	
}



xhr.open('GET', window.location.href);
xhr.responseType = 'document';
xhr.send();

var request = new XMLHttpRequest(); 
request.open("GET", url);
request.onreadystatechange = function() { 
if (request.readyState === 4 && request.status === 200) {

//response handling code

}
};
request.send(null); // Send the request now 

