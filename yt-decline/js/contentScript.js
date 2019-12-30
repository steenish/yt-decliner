console.log("Youtube Decline running.")

var hideTags =         ["ytd-two-column-browse-results-renderer"]
var hideIds =          ["related"]
var hideClassnames =   ["html5-endscreen ytp-player-content videowall-endscreen ytp-endscreen-paginate ytp-show-tiles"]

var ignoreURLStrings = ["subscriptions",
                        "history",
                        "playlist",
                        "library"]

function declineVideos() {
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

    // Hide by class name.
    for (name of hideClassnames) {
      var elements = document.getElementsByClassName(name)
      for (element of elements) {
        if (element != null) {
          element.style.display = "none"
        }
      }
    }
  }
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

console.log("Started declining recommended videos every second.")

// Repeat decline every second.
setInterval(declineVideos, 1000)
