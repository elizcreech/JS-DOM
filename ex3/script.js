// Make the box blue when you click the button. (Here's some code to help you get started)

var button = document.getElementById('myButton')

button.addEventListener('click', function () {
  var elementBox = document.getElementById('box')
  console.log('The Element Box is' + elementBox)
  elementBox.style.backgroundColor = 'blue'
})
