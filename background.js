chrome.webNavigation.onCompleted.addListener((details) => {
  console.log("Loaded listener");
  console.log(details.url);
  if (details.url.startsWith("https://www.youtube.com/results")) {
    console.log("results");
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      function: blockYouTubeSearchResults
    });
  }
});

function blockYouTubeSearchResults() {
  console.log("Looking to block");
  const blockedKeywords = chrome.storage.sync.get("blockedKeywords");
  blockedKeywords = ["chicken"]

  const searchResults = document.querySelectorAll("#contents ytd-video-renderer");
  searchResults.forEach((result) => {
    const titleElement = result.querySelector("#video-title");
    const title = titleElement.innerText.toLowerCase();

    if (blockedKeywords.some(keyword => title.includes(keyword))) {
      result.remove();
    }
  });
}