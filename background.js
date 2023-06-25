chrome.webNavigation.onCompleted.addListener((details) => {
  chrome.tabs.get(details.tabId, (tab) => {
    console.log("Loaded listener");
    console.log(details.url);
    if (tab.url.startsWith("https://www.youtube.com/results")) {
      console.log("results");
      var blockedKeywords = chrome.storage.sync.get("blockedKeywords");
      blockedKeywords = ["chicken"]
      console.log("chicken")
      const searchResults = tab.querySelectorAll("#contents ytd-video-renderer");
      searchResults.forEach((result) => {
        const titleElement = result.querySelector("#video-title");
        const title = titleElement.innerText.toLowerCase();
        console.log(title)
        if (blockedKeywords.some(keyword => title.includes(keyword))) {
          result.remove();
        }
      });
    }
  })
});