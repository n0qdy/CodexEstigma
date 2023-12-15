function closeSidebar() {
    $('#sidebar-close').on('click',function(ev) {
        $('aside').toggleClass('show');
        ev.preventDefault();
    });
}

function toggleSidebar() {
    let sidebarToggle = $('#sidebar-toggle');
    let root = $(':root');

    sidebarToggle.on('click',function(ev) {

        if(sidebarToggle.hasClass( "open" )) {
            root.css('--sidebar-width', root.css('--sidebar-menu'));
            sidebarToggle.removeClass( "open" );
        } else {
            root.css('--sidebar-width', root.css('--sidebar-width2'));
            sidebarToggle.addClass( "open" );
        }

        ev.preventDefault();
    });
}


export function bindSidebar() {
    closeSidebar();
    toggleSidebar();
}