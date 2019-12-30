console.log("Youtube Decline running.")

var hideTags = ["ytd-two-column-browse-results-renderer"]
var hideIds =  ["related"]
var ignoreURLStrings = ["subscriptions",
                        "history",
                        "playlist",
                        "library"]

function declineVideos() {
  console.log("Declining videos.")

  if (!ignoreURL()) {

    // Hide by tag name.
    for (tag of hideTags) {
      var elements = document.getElementsByTagName(tag)
      for (element of elements) {
        if (element != null) {
          element.style.display = "none"
        }
      }
    }

    // Hide by id.
    for (id of hideIds) {
      var element = document.getElementById(id)

      if (element != null) {
        element.style.display = "none"
      }
    }
  }
  console.log("Declined recommended videos.")
}

function ignoreURL() {
  var ignore = false

  for (string of ignoreURLStrings) {
    if (window.location.href.indexOf(string) > -1) {
      ignore = true
    }
  }
  return ignore
}

// Repeat decline every second.
setInterval(declineVideos, 1000)
