const myAppURL = "https://evening-shore-25523.herokuapp.com/tweet/new"

chrome.browserAction.onClicked.addListener(function(tab){
    if ( !tab.url.includes("github.com") || !tab.url.includes("issue") ) { return };

    var url = myAppURL + "?url=" + tab.url
    chrome.tabs.create({url: url});
});