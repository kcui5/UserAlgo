/*
var blockedKeywords = chrome.storage.sync.get("blockedKeywords") || [];
blockedKeywords = ["chicken"];*/
var startTime = "08:00";
var endTime = "17:00";

document.addEventListener('DOMContentLoaded', event => {
    const observer = new MutationObserver(mutations => {
        console.log(document.title);
        const searchResults = document.querySelectorAll('ytd-video-renderer');
        console.log(searchResults.length);
        //console.log(blockedKeywords);
        chrome.storage.sync.get('blockedKeywords', function (data) {
            words = data.blockedKeywords || [];
        });
        searchResults.forEach((result) => {
            const title = result.querySelector('#video-title').title.toLowerCase();
            console.log('Title:', title);
            const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: 'numeric', hour12: false });
            console.log(currentTime);

            for (let i = 0; i < words.length; i++) {
                const w = words[i];
                startTime = w["startTime"];
                endTime = w["endTime"];
                
                if (title.includes(w["keyword"])) {
                    console.log("has" + w);
                    if (currentTime >= startTime && currentTime <= endTime) {
                        console.log("in time");
                        result.remove();
                    };
                };
            };
        });
    });
      
    observer.observe(document, { childList: true, subtree: true });  
});