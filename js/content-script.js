document.addEventListener('DOMContentLoaded', function () {
    chrome.runtime.onMessage.addListener(function (request, sender, sendMessage) {
        if (request.greeting == "url") {
            sendMessage(window.location.href);
        } else {
            sendMessage("FUCK OFF");
        }
    });
});