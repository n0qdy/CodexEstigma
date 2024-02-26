export function loadTemplate () {
    return new Promise((resolve, reject) => {
        let timestamp = (environment === 'production') ? new Date().getTime() : '';
        let section = $('section');
        let dir = section.attr('data-dir');
        let body = $('body');
        let head = $("head");
        let urlHeader   = dir + '/template/header.html?_=' + timestamp;
        let urlMain   = dir + '/template/main.html?_=' + timestamp;
        let urlMenu   = dir + '/template/menu.html?_=' + timestamp;
        let urlMetas   = dir + '/template/metas.html?_=' + timestamp;
        let urlSidebar   = dir + '/template/sidebar.html?_=' + timestamp;

        head.append('<link rel="stylesheet" href="' + dir + '/css/main.css?_=' + timestamp + '">');
        if (dir !== '.') {
            head.append('<link rel="stylesheet" href="./page.css?_=' + timestamp + '">');
        }

        body.addClass('sidebar-open');

        $.get(urlMetas, {} )
            .done(function(data) {
                head.append(data);
                $.get(urlSidebar, {} )
                    .done(function(data2) {
                        $("body").prepend(data2);
                        $.get(urlMenu, {} )
                            .done(function(data3) {
                                $('#menu').append(data3);
                                fixHrefs();
                                $.get(urlMain, {})
                                    .done(function (data4) {
                                        $("aside").after(data4);
                                        $.get(urlHeader, {})
                                            .done(function (data5) {
                                                $("#main").prepend(data5);
                                                moveSection(head, section);
                                                resolve([data, data2, data3, data4, data5]);
                                            }).fail(function (error) {
                                            err('header');
                                            reject(error);
                                        });
                                    }).fail(function (error) {
                                    err('main');
                                    reject(error);
                                    });
                            }).fail(function (error) {
                                err('menu');
                                reject(error);
                            });
                    }).fail(function (error) {
                        err('sidebar');
                        reject(error);
                    });
            }).fail(function (error) {
                err('metas');
                reject(error);
            });
    });
}

function err(load) {
    console.log('error en el template cargando: ' + load);
    return false;
}

function fixHrefs() {
    let section = $('section');
    let dir = section.attr('data-dir');
    let menuIndex = parseInt(section.attr('data-menuIndex'));
    $('#menu a').each(function( index ) {
        $(this).attr('href', dir+$(this).attr('href'));
        if((index + 1) === menuIndex) {
            $(this).addClass('current');
        }
    });
}

function moveSection(head, section) {
    let tmpSection = section.detach();
    head.append('<title>' + section.attr('data-webTitle') + '</title>');
    $('#main-title h1').text(section.attr('data-title'));
    $('#main-body').append(tmpSection);
    $('section').show();
    return true;
}
