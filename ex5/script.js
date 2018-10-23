// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp
var button = document.getElementById('myButton')

// var newbox = document.getElementsByClassName('box') **Why cant I copy an existing element and use that?
button.addEventListener('click', function () {
  var newbox = document.createElement('myNewBox')
  newbox.style.backgroundColor = 'red'
  newbox.style.width = '200px'
  newbox.style.height = '100px'
  document.getElementById('boxContainer').appendChild(newbox)
})
