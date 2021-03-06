function toggleClass(el, _class) {
    if (el && el.className && el.className.indexOf(_class) >= 0) {
        var pattern = new RegExp('\\s*' + _class + '\\s*');
        el.className = el.className.replace(pattern, ' ');
    } else if (el) {
        el.className = el.className + ' ' + _class;
    } else {
        console.log("Element not found :(")
    }
}

window.onload = function() {
    const navBtn = document.querySelector("#menu-btn");
    const menuNav = document.querySelector(".menu-nav")
    navBtn.addEventListener('click', function() {
        toggleClass(navBtn, 'menu-btn_active')
    }, false)
    menuNav.addEventListener('click', function() {
        toggleClass(menuNav, 'menu-nav_active')
    }, false)
}