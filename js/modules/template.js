export function loadTemplate () {

    let body = $('body');
    let head = $("head");
    let urlHeader   = window.location.href + 'template/header.html?';
    let urlMain   = window.location.href + 'template/main.html?';
    let urlMetas   = window.location.href + 'template/metas.html?';
    let urlSidebar   = window.location.href + 'template/sidebar.html?';

    body.addClass('sidebar-open');

    $.get(urlMetas, {} )
        .done(function(data) {
            head.append(data);
            $.get(urlSidebar, {} )
                .done(function(data) {
                    $("body").prepend(data);
                    $.get(urlMain, {} )
                        .done(function(data) {
                            $("aside").after(data);
                            $.get(urlHeader, {} )
                                .done(function(data) {
                                    $("#main").prepend(data);
                                    section(head);
                                });
                        });
                });
        });
}

function section(head) {
    let section = $('section');
    let tmpSection = section.detach();
    head.append('<title>' + section.attr('data-webTitle') + '</title>');
    $('#main-title h1').text(section.attr('data-title'));
    $('#main-body').append(tmpSection);
}