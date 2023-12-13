export function loadTemplate () {

    let url   = window.location.href + 'template/header.html?';
    console.log(url);
    $.get( url, {} )
        .done(function(data) {
            console.log(data);
            $("body").prepend(data);
        });
}