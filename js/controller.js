function menuToggle() {
    var menu = window.document.getElementById('menuitems');
    var header = window.document.getElementsByTagName('header')[0];
    console.log(menu.style.display);
    if(menu.style.display !== 'flex') {
        menu.style.display = 'flex';
        header.classList.add('open');
        header.classList.remove('close');
    } else {
        menu.style.display = 'none';
        header.classList.add('close');
        header.classList.remove('open');
    }
}
