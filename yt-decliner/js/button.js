window.onload = function () {
    var button = document.getElementById("button");

    button.onclick = function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

            let regex = RegExp(".*:\/\/.*\.youtube\.com.*");
            if (!regex.test(tabs[0].url)) {
                console.log("YouTube not selected.");
                return;
            }

            chrome.tabs.sendMessage(tabs[0].id, { action: "toggle" }, function (response) {
                let lastError = chrome.runtime.lastError;
                if (lastError) {
                    console.log(lastError.message);
                    return;
                }

                if (response.enabled) {
                    chrome.browserAction.setIcon({ path: "/images/icon_128.png" });
                } else {
                    chrome.browserAction.setIcon({ path: "/images/icon_128_off.png" });
                }
            });
        });
    }
}
