//var blockedKeywords = chrome.storage.sync.get("blockedKeywords") || [];
console.log("in saved");

// Retrieve the item from Chrome Sync Storage
chrome.storage.sync.get('blockedKeywords', function (data) {
    const words = data.blockedKeywords || [];
    console.log(words);
    // Update the HTML element with the retrieved values
    const wordContainer = document.getElementById('keywordsdisplay');
    for (const word of words) {
        const listItem = document.createElement('p');
        listItem.textContent = word['keyword'] + ' ' + word['startTime'] + ' ' + word['endTime'];
    
        wordContainer.appendChild(listItem);
      };
  });
  