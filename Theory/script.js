
const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

this.count=0
var autoOpen=true
var after="after"


if(after=="after"){
nav.forEach(nav_el => nav_el.classList.add('visible'))
}

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
    after="after"
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
    after="after"
})



function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
}

