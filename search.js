const idSearch = "https://<domain>.atlassian.net/browse/";
const textSearch = "https://<domain>.atlassian.net/issues/?jql=text~"
var searchUrl = "";
var patt = new RegExp ('^([A-Z]|[a-z]){1,5}-[0-9]{1,5}$');

browser.contextMenus.create({
    id: "searchJira",
    title: "Search JIRA for \"%s\"",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    var selection = info.selectionText.trim();

    if (patt.test(selection)) {
        searchUrl = hxIdSearch + selection;
    } else {
        searchUrl = hxTextSearch + selection;
    };

    browser.tabs.create({ 
        url: searchUrl 
    });
});