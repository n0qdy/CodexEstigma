const environment = 'production'; // 'production | development'
document.addEventListener("DOMContentLoaded", function() {
    let timestamp = (environment === 'production') ? new Date().getTime() : '';
    let path = document.getElementsByTagName('section')[0].getAttribute('data-path');
    let jquery = path + '/js/jquery-3.7.1.min.js?_=' + timestamp;
    let core = path + '/js/core.js?_=' + timestamp;
    let scriptJquery = document.createElement('script');

    scriptJquery.onload = function() {
        console.log('cargado jquery');
        loadCore(core);
    };
    scriptJquery.src = jquery;
    document.getElementsByTagName('body')[0].appendChild(scriptJquery);
});

function loadCore(core) {
    let scriptCore = document.createElement('script');
    scriptCore.onload = function() {
        console.log('cargado core');
    };
    scriptCore.src = core;
    scriptCore.type = 'module';
    document.getElementsByTagName('body')[0].appendChild(scriptCore);
}