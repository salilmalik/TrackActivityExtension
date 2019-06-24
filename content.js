var anchorTags = document.getElementsByTagName("a");
for (var i = 0; i < anchorTags.length; i++) {
  anchorTags[i].addEventListener("click", function() {
    var href = this.getAttribute("href");
    var category;
    var hrefArray = href.split("/");
    if (hrefArray[1] === "questions") {
      if (hrefArray[2] === "tagged") {
        category = "Tag";
      } else {
        category = "Question";
      }
    } else if (hrefArray[1] === "users") {
      category = "User Profile";
    } else {
      if (this.getAttribute("class") != "null") {
        if (this.getAttribute("class" === "vote-up-off")) {
          category = "Vote Up" + this.getAttribute("class");
        } else if (this.getAttribute("class" === "vote-down-off")) {
          category = "Vote down" + this.getAttribute("class");
        }
        category = this.getAttribute("class") + "is clicked";
      } else {
        category = "Clicked on " + href;
      }
    }
    if ((href = "/question/ask/")) {
      category = "Ask a Question";
    }
    chrome.runtime.sendMessage({
      category: category,
      event: "Click",
      content: this.textContent
    });
  });
}

$(window).on("scroll", function() {
  chrome.runtime.sendMessage({
    category: "scroll",
    event: "Scroll",
    content: ""
  });
  $(window).off("scroll");
});
