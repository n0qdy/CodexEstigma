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


export function bindSidebar() {
    closeSidebar();
    toggleSidebar();
}