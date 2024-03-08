console.log("Script background.js exécuté");
chrome.action.setBadgeText({ text: "Momo" });
chrome.action.setBadgeTextColor({ color: "white" });
chrome.action.setBadgeBackgroundColor({ color: "red" });

const notificationOptions = {
  type: "basic",
  iconUrl: "images/icon-128.png",
  title: "Test notification",
  message: "This is a test notification.",
};
chrome.notifications.create("testNotification", notificationOptions);
