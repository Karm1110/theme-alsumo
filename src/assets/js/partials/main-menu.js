import 'mmenu-light';
document.addEventListener('DOMContentLoaded', () => {
    const menu = new MmenuLight(document.querySelector('#mobile-menu'));
    menu.navigation({title: salla.lang.get('blocks.header.main_menu')});
    menu.offcanvas();
});
