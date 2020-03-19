import './style.css';

import loadPage from './loadpage.js';
import loadMenu from './menu.js'
import loadContactTab from './contact'

loadPage()

function deletePageContact() {
  // document.getElementById('title').textContent = ' '
  // document.getElementById('menuid').textContent = ' '
  document.getElementById('menu').classList.add('hide')
  document.getElementById('menutitle').classList.toggle('hide')
}
function deletePageMenu() {
  // document.getElementById('title').textContent = ' '
  // document.getElementById('contactid').textContent = ' '
  document.getElementById('contacttitle').classList.add('hide')
  document.getElementById('image').classList.add('hide')
}
function deletePageHome() {
  document.getElementById('contacttitle').classList.add('hide')
  document.getElementById('menutitle').classList.add('hide')
  document.getElementById('menu').classList.add('hide')
  document.getElementById('image').classList.remove('hide')
}

document.getElementById('contactTab').addEventListener('click', loadContactTab)
document.getElementById('contactTab').addEventListener('click', deletePageContact)

document.getElementById('menuTab').addEventListener('click', loadMenu)
document.getElementById('menuTab').addEventListener('click', deletePageMenu)

document.getElementById('homeTab').addEventListener('click', loadPage)
document.getElementById('homeTab').addEventListener('click', deletePageHome)
