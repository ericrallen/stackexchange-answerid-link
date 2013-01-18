//borrowed from http://www.pakzilla.com/2012/03/20/how-to-copy-to-clipboard-in-chrome-extension/
function copy_to_clipboard(str) {
	var copy_div = document.createElement('div');
	copy_div.contentEditable = true;
	document.body.appendChild(copy_div);
	copy_div.innerHTML = str;
	copy_div.unselectable = "off";
	copy_div.focus();
	document.execCommand('SelectAll');
	document.execCommand("Copy", false, null);
	document.body.removeChild(copy_div);
}
//end borrowed code

//borrowed from http:stackoverflow.com/questions/8794633/chrome-extension-copy-text#answer-8807145
chrome.extension.onRequest.addListener(function(obj) {
	copyToClipboard(obj.link);
});
//end borrowed code