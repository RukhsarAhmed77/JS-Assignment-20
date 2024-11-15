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
// Question 01
  var form = document.getElementById('signupForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var gender = document.getElementById('gender').value;

    document.getElementById('outputText').innerHTML = '<strong>Name:</strong> ' + name + '<br>' + '<strong>Email:</strong> ' + email + '<br>' + '<strong>Password:</strong> ' + password + '<br>' + '<strong>Gender:</strong> ' + gender;
  }
  )