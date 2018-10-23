// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"
var button = document.getElementById('myButton')

button.addEventListener('click', function () {
  const elementBox = document.getElementsByClassName('box')
  elementBox[0].style.backgroundColor = 'blue'
  elementBox[1].style.backgroundColor = 'blue'
  elementBox[2].style.backgroundColor = 'blue'
})
