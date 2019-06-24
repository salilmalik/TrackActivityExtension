chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var accountName;
  chrome.cookies.get(
    { url: "http://localhost:4200/", name: "accountName" },
    function(cookie) {
      if (cookie) {
        accountName = cookie.value;
        request.accountName = cookie.value;
        var url = "http://localhost:3000/api/behaviour/" + accountName;
        $.post(url, { type: request }, function(data) {
          console.log(JSON.stringify(data));
        });
      }
    }
  );
});
