/*
var blockedKeywords = chrome.storage.sync.get("blockedKeywords") || [];
blockedKeywords = ["chicken"];
var startTime = "08:00";
var endTime = "17:00";
*/
document.addEventListener('DOMContentLoaded', event => {
    const observer = new MutationObserver(mutations => {
        console.log(document.title);
        const searchResults = document.querySelectorAll('ytd-video-renderer');
        console.log(searchResults.length);
        //console.log(blockedKeywords);
        searchResults.forEach((result) => {
            const title = result.querySelector('#video-title').title.toLowerCase();
            console.log('Title:', title);

            const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: 'numeric', hour12: false });
            console.log(currentTime);

            var blockedKeywords = chrome.storage.sync.get("blockedKeyword") || [];
            console.log(blockedKeywords);
            // Check if the current time is within the specified range
            /*
            if (currentTime >= startTime && currentTime <= endTime) {
                console.log('The current time is within the specified range.');

            } else {
                console.log('The current time is outside the specified range.');
            }

            if (blockedKeywords.some(keyword => title.includes(keyword))) {
                console.log("removing");
                result.remove();
            }*/
        });
    });
      
    observer.observe(document, { childList: true, subtree: true });  
});