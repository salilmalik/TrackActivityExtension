var anchorTags = document.getElementsByTagName("a");
for (var i = 0; i < anchorTags.length; i++) {
    anchorTags[i].addEventListener('click', function () {
        chrome.runtime.sendMessage({ "event": "Click" });
    }
    )
};
