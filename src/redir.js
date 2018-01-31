chrome.tabs.onCreated.addListener(redirect);
chrome.tabs.onUpdated.addListener(redirect);

function redirect(tabid) {
    if (tabid) {
        chrome.tabs.get(tabid, function(tab) {
            if (tab.url.indexOf('://slack-redir.net/') > -1) {
                chrome.tabs.update(tab.id, {url: decodeURIComponent(tab.url.replace('https://slack-redir.net/link?url=',''))});
            }
        })
    }
}