$(document).ready(function() {
	$('#showHelp').click(function() {
		chrome.tabs.create({ url: "../readme.html" });
	});
});