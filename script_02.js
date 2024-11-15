var body = document.body;
var currentAngle = 0;
var colors = ['#fff', '#000', 'red', 'blue', 'green', 'yellow', 'orange', 'pink', 'violet'];
var colorIndex = 0;

function toggleBackground() {
    currentAngle += 360;
    colorIndex = (colorIndex + 1) % colors.length;

    
    body.style.transition = 'background 1s ease';
    body.style.background = `linear-gradient(${currentAngle}deg, ${colors[colorIndex]}, ${colors[(colorIndex + 1) % colors.length]})`;
}
// Question 02

var toggleButton = document.getElementById("toggleButton");
var moreText = document.getElementById("moreText");

toggleButton.addEventListener("click", function () {
  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "block";
    toggleButton.textContent = "See Less";
  } else {
    moreText.style.display = "none";
    toggleButton.textContent = "See More";
  }
});
