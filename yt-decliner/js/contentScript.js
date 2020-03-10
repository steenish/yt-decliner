console.log("Youtube Decliner running.")

var hideTags =         ["ytd-two-column-browse-results-renderer"]
var hideIds =          ["related"]
var hideClassnames =   ["ytp-ce-element",
                        "ytp-endscreen-content"]

var ignoreURLStrings = ["subscriptions",
                        "history",
                        "playlist",
                        "library",
                        "user",
                        "channel",
                        "my_videos"]

console.log("Started declining recommended videos every half second.")

// Repeat decline every second.
setInterval(declineVideos, 500)

//Used for checking if common tags should be ignored on a certain URL.
// Returns true if videos should not be hidden on the site.
function ignoreURL() {
  var ignore = false
  var href = window.location.href

  for (string of ignoreURLStrings) {
    if (contains(href, string)) {
      ignore = true
    }
  }
  return ignore
}

// Returns true if string contains the substring.
function contains(string, substring) {
  return string.indexOf(substring) > -1
}

// Performs the given operation on all elements that are covered by the arrays.
// The operation parameter must be a function that takes a single argument.
function declineVideos() {
  // Operate by tag name.
  for (tag of hideTags) {
    var elements = document.getElementsByTagName(tag)
    for (element of elements) {
      if (element != null) {
        // Unhide tags in ignored URLs
        if (ignoreURL()) {
          element.style.visibility = "visible"
        } else {
          element.style.visibility = "hidden"
        }
      }
    }
  }

  // Operate by id.
  for (id of hideIds) {
    var element = document.getElementById(id)

    if (element != null) {
      element.style.visibility = "hidden"
    }
  }

  // Operate by class name on divs.
  for (name of hideClassnames) {
    var allDivs = document.getElementsByTagName('div');

    for (var i = 0; i < allDivs.length; i++) {
      var div = allDivs[i];

      if (contains(div.className, name)) {
        div.style.visibility = "hidden"
      }
    }
  }
}
