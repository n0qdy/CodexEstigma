
function loadDefinitions(url, callback) {
    $.getJSON(url, function(data) {
        callback(data);
    });
}

function bindTooltip (me) {
    me.on('click',function(ev) {
        $(this).find('.tooltip-window').toggleClass('hide');
        ev.preventDefault();
    });
}

export function tooltips() {
    let timestamp = (environment === 'production') ? new Date().getTime() : '';
    let dir =  $('section').attr('data-dir');
    let url = dir + '/js/db/definitions.json?_=' + timestamp;

    loadDefinitions(url, function (definitions) {
        $('.tooltip').each(function () {
            let entry = $(this).attr('data-definition');
            $(this).append('<span class="tooltip-window hide">'+ definitions[entry]['title'] +'</span>');
            bindTooltip($(this));
        });
    });
}
