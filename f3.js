<!DOCTYPE html>
<head>
<title>Event Listeners Example</title>
</head>
<body>
<!-- Button to click -->
<button id="clickButton">Click Me</button>
<!-- Example image with a reliable URL -->
<img id="exampleImage" src="https://www.w3schools.com/html/img_chania.jpg"
alt="Example Image" width="200">
<script>
// Event listener for the button click
document.getElementById('clickButton').addEventListener('click', function() {
console.log("Button clicked!");
});
// Event listener for mouseover on the image to change its border color
document.getElementById('exampleImage').addEventListener('mouseover', function() {
this.style.border = '5px solid red'; // Change border color to red});
// Event listener to log the key pressed by the user
document.addEventListener('keydown', function(event) {
console.log("Key pressed: " + event.key);
});
// Event listener for mouseout on the image to change its border color
document.getElementById('exampleImage').addEventListener('mouseout', function() {
this.style.border = 'none'; // remove the border
});
</script>
</body>
</html>