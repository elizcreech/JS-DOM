// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

var h3section = document.getElementById('section-header')
var a = ''

h3section.addEventListener('click', function () {
  var textSection = document.getElementById('section')
  if (a === false) {
    textSection.style.height = '0px'
  } else {
    textSection.style.height = '0px'
    a = true
  }
})
