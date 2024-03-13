function closeSidebar() {
    $('#sidebar-close').on('click',function(ev) {
        $('aside').toggleClass('show');
        ev.preventDefault();
    });
}

function toggleSidebar() {
    $('#sidebar-toggle').on('click',function(ev) {
        $('body').toggleClass('sidebar-collected');
        ev.preventDefault();
    });
}

function toggleSubmenu(){
    let submenus = $('#menu > li');

    submenus.on("touchstart", function(ev) {
        $(this).find('ul').show();
        ev.preventDefault();
    });

    submenus.on("touchend", function(ev) {
        $(this).find('ul').hide();
        ev.preventDefault();
    });

}

export function bindSidebar() {
    closeSidebar();
    toggleSidebar();
    toggleSubmenu();
}