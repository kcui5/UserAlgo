const saveButton = document.getElementById("save-button");
const keywordInput = document.getElementById("keyword");
const startTimeInput = document.getElementById("start-time");
const endTimeInput = document.getElementById("end-time");
const clearButton = document.getElementById("clear");

console.log("in popup");

saveButton.addEventListener("click", () => {
  const keyword = keywordInput.value;
  const startTime = startTimeInput.value;
  const endTime = endTimeInput.value;
  console.log("clicked");
  // Retrieve the existing list from Chrome Sync Storage
  chrome.storage.sync.get('blockedKeywords', function(data) {
    var blocked = data.blockedKeywords;
    if (!blocked) {
      chrome.storage.sync.set({'blockedKeywords' : []});
    };
  });

  chrome.storage.sync.get('blockedKeywords', function(data) {
    var blocked = data.blockedKeywords;

    // Add a new item to the list
    blocked.push({
      keyword,
      startTime,
      endTime,
    });

    // Save the updated list back to Chrome Sync Storage
    chrome.storage.sync.set({ blockedKeywords : blocked }, function() {
      console.log('Item added to the list');
    });
  });
});

clearButton.addEventListener("click", () => {
  chrome.storage.sync.remove('blockedKeywords', function() {
    console.log("Cleared");
  });
});