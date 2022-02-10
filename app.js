

const btn = document.querySelector('#icone')
const nav = document.querySelector('.nav')

function menu(){
  nav.classList.toggle('active')
}

btn.addEventListener('click', menu)