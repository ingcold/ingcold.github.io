
const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

var autoOpen=true
function autoOpenSetBool() {
    autoOpen=false
}

if(autoOpen){
nav.forEach(nav_el => nav_el.classList.add('visible'))
}

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})

document.getElementById('label').innerHTML = autoOpen?'自动打开左侧栏':'自动关闭左侧栏'