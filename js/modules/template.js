export function loadTemplate () {
    return new Promise((resolve, reject) => {
        let section = $('section');
        let path = section.attr('data-path');
        let body = $('body');
        let head = $("head");
        let urlHeader   = path + '/template/header.html?';
        let urlMain   = path + '/template/main.html?';
        let urlMetas   = path + '/template/metas.html?';
        let urlSidebar   = path + '/template/sidebar.html?';

        $('head').append('<link rel="stylesheet" href="' + path + '/css/main.css">');

        body.addClass('sidebar-open');

        $.get(urlMetas, {} )
            .done(function(data) {
                head.append(data);
                $.get(urlSidebar, {} )
                    .done(function(data2) {
                        $("body").prepend(data2);
                        $.get(urlMain, {} )
                            .done(function(data3) {
                                $("aside").after(data3);
                                $.get(urlHeader, {} )
                                    .done(function(data4) {
                                        $("#main").prepend(data4);
                                        moveSection(head, section);
                                        resolve([data, data2, data3, data4]);
                                    }).fail(function (error) {
                                        err('header');
                                        reject(error);
                                    });
                            }).fail(function (erro) {
                                err('main');
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

function moveSection(head, section) {
    let tmpSection = section.detach();
    head.append('<title>' + section.attr('data-webTitle') + '</title>');
    $('#main-title h1').text(section.attr('data-title'));
    $('#main-body').append(tmpSection);
    return true;
}

function err(load) {
    console.log('error en el template cargando: ' + load);
    return false;
}


/*
export function hacerPeticionAJAX() {
    return new Promise((resolve, reject) => {
        $.get('tu/url', function(data) {
            // Procesar la respuesta
            resolve(data);
        })
            .fail(function(error) {
                // Manejar errores
                reject(error);
            });
    });
}
*/
