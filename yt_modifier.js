console.log("youtube modifier running");
blockedKeywords = ["chicken"];

document.addEventListener('DOMContentLoaded', event => {
    const observer = new MutationObserver(mutations => {
        console.log(document.title);
        const searchResults = document.querySelectorAll('ytd-video-renderer');
        console.log(searchResults.length);
        console.log(blockedKeywords);
        searchResults.forEach((result) => {
            const title = result.querySelector('#video-title').title.toLowerCase();
            console.log('Title:', title);

            if (blockedKeywords.some(keyword => title.includes(keyword))) {
                console.log("removing");
                result.remove();
            }
        });
    });
      
    observer.observe(document, { childList: true, subtree: true });  
});