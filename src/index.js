import './style.css';

import loadPage from './loadpage.js';
import loadMenu from './menu.js'
import loadContactTab from './contact'

loadPage()

function switchToContact() {
  document.getElementById('image').classList.add('hide')
  document.getElementById('menu').classList.add('hide')
  document.getElementById('menutitle').classList.add('hide')
}
function switchToMenu() {
  document.getElementById('map').classList.add('hide')
  document.getElementById('contacttitle').classList.add('hide')
  document.getElementById('image').classList.add('hide')
}
function switchToHome() {
  document.getElementById('contacttitle').classList.add('hide')
  document.getElementById('menutitle').classList.add('hide')
  document.getElementById('menu').classList.add('hide')
  document.getElementById('map').classList.add('hide')
  document.getElementById('image').classList.remove('hide')
}

document.getElementById('contactTab').addEventListener('click', loadContactTab)
document.getElementById('contactTab').addEventListener('click', switchToContact)

document.getElementById('menuTab').addEventListener('click', loadMenu)
document.getElementById('menuTab').addEventListener('click', switchToMenu)

document.getElementById('homeTab').addEventListener('click', loadPage)
document.getElementById('homeTab').addEventListener('click', switchToHome)
