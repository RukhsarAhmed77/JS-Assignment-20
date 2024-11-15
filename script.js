var moreText = document.getElementById("moreText");
var toggleButton = document.getElementById("toggleButton");

function toggleText() {
  if (moreText.classList.contains("hidden")) {
    moreText.classList.remove("hidden");
    toggleButton.textContent = "See Less";
  } else {
    moreText.classList.add("hidden");
    toggleButton.textContent = "See More";
  }
}

toggleButton.addEventListener("click", toggleText);
