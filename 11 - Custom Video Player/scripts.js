/* Get Our Elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

/* Build out functions */
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton() {
  console.log("Update the Button");
}

// Event Listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", togglePlay);
video.addEventListener("pause", togglePlay);
toggle.addEventListener("click", togglePlay);

// Retired
