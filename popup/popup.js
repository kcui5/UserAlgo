const saveButton = document.getElementById("save-button");
const keywordInput = document.getElementById("keyword");
const startTimeInput = document.getElementById("start-time");
const endTimeInput = document.getElementById("end-time");

saveButton.addEventListener("click", () => {
  const keyword = keywordInput.value;
  const startTime = startTimeInput.value;
  const endTime = endTimeInput.value;

  chrome.storage.sync.get("blockedKeywords", (result) => {
    const blockedKeywords = result.blockedKeywords || [];

    blockedKeywords.push({
      keyword,
      startTime,
      endTime,
    });

    chrome.storage.sync.set({ blockedKeywords }, () => {
      window.close();
    });
  });
});
