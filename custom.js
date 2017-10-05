'use strict'

//search
function myFunction() {
    var x = document.getElementById("mySearch").placeholder;
    document.getElementById("demo").innerHTML = x;
}


//toggle
const link = document.querySelector('.menu-toggle')
const content = document.querySelector('.menu-nav')

content.classList.add('hide-menu')

link.addEventListener('click', function(e){
  // e.preventDefault()//prevent default behaviour of 'a' element
  content.classList.toggle('hide-menu')
})
