console.log("Youtube Decline running.")

var hideTags =         ["ytd-two-column-browse-results-renderer"]
var hideIds =          ["related"]
var hideClassnames =   ["html5-endscreen ytp-player-content videowall-endscreen ytp-endscreen-paginate ytp-show-tiles",
                        "ytp-ce-element ytp-ce-video ytp-ce-top-left-quad ytp-ce-size-640 ytp-ce-element-show",
                        "ytp-ce-element ytp-ce-video ytp-ce-top-right-quad ytp-ce-size-640 ytp-ce-element-show",
                        "ytp-ce-element ytp-ce-video ytp-ce-bottom-left-quad ytp-ce-size-640 ytp-ce-element-show",
                        "ytp-ce-element ytp-ce-video ytp-ce-bottom-right-quad ytp-ce-size-640 ytp-ce-element-show"]

var ignoreURLStrings = ["subscriptions",
                        "history",
                        "playlist",
                        "library"]

console.log("Started declining recommended videos every second.")

// Repeat decline every second.
setInterval(declineVideos, 1000)

// Hides videos.
function declineVideos() {
  // If the URL should not be ignored, hide the videos.
  if (!ignoreURL()) {
    operateOnVideos(function(element) {element.style.visibility = "hidden"})
  } else { // Otherwise, show the videos.
    operateOnVideos(function(element) {element.style.visibility = "visible"})
  }
}

// Returns true if videos should not be hidden on the site.
function ignoreURL() {
  var ignore = false
  var href = window.location.href

  for (string of ignoreURLStrings) {
    if (href.indexOf(string) > -1) {
      ignore = true
    }
  }
  return ignore
}

// Performs the given operation on all elements that are covered by the arrays.
// The operation parameter must be a function that takes a single argument.
function operateOnVideos(operation) {
  // Operate by tag name.
  for (tag of hideTags) {
    var elements = document.getElementsByTagName(tag)
    for (element of elements) {
      if (element != null) {
        operation(element)
      }
    }
  }

  // Operate by id.
  for (id of hideIds) {
    var element = document.getElementById(id)

    if (element != null) {
      operation(element)
    }
  }

  // Operate by class name.
  for (name of hideClassnames) {
    var elements = document.getElementsByClassName(name)
    for (element of elements) {
      if (element != null) {
        operation(element)
      }
    }
  }
}
