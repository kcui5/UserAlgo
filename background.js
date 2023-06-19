chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateRule({
    addRules: [
      {
        id: 'block_requests_with_keywords',
        priority: 1,
        action: { type: 'block' },
        condition: {
          urlFilter: '*://www.youtube.com/*',
          resourceTypes: ['main_frame', 'sub_frame', 'stylesheet', 'script', 'image', 'font', 'object', 'xmlhttprequest', 'fetch'],
          // The list of keywords to block
          // Modify this array to add or remove keywords to block
          urlMatches: [
            '*keyword1*',
            '*keyword2*',
            '*keyword3*'
          ]
        }
      }
    ]
  });
});
