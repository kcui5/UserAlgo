document.addEventListener('DOMContentLoaded', event => {
    const observer = new MutationObserver(mutations => {
        const searchResults = document.querySelectorAll('ytd-video-renderer');
        chrome.storage.sync.get('blockedKeywords', function (data) {
            words = data.blockedKeywords || [];
        });
        searchResults.forEach((result) => {
            const title = result.querySelector('#video-title').title.toLowerCase();
            const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: 'numeric', hour12: false });

            for (let i = 0; i < words.length; i++) {
                const w = words[i];
                const key = w["keyword"];
                const startTime = w["startTime"];
                const endTime = w["endTime"];
                console.log(key);
                if (title.includes(key)) {
                    if (currentTime >= startTime && currentTime <= endTime) {
                        console.log(title);
                        console.log("removed");
                        result.remove();
                    };
                };
            };
        });
    });
      
    observer.observe(document, { childList: true, subtree: true });  
});