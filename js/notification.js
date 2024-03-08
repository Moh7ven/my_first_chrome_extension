document.addEventListener("DOMContentLoaded", function () {
  chrome.action.onClicked.addListener(function (tab) {
    const notificationOptions = {
      type: "basic",
      iconUrl: "images/icon-128.png",
      title: "Test notification",
      message: "This is a test notification.",
    };
    chrome.notifications.create("testNotification", notificationOptions);
  });
});
