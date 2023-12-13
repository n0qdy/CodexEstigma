document.addEventListener("DOMContentLoaded", function() {
    let jquery = './js/jquery-3.7.1.min.js';
    let core = './js/test.js';

    let scriptJquery = document.createElement('script');
    scriptJquery.onload = function() {
        console.log('cargado jquery');
        loadCore(core);
    };
    scriptJquery.src = jquery;
    document.getElementsByTagName('head')[0].appendChild(scriptJquery);
});

function loadCore(core) {
    let scriptCore = document.createElement('script');
    scriptCore.onload = function() {
        console.log('cargado core');
    };
    scriptCore.src = core;
    scriptCore.type = 'module';
    document.getElementsByTagName('head')[0].appendChild(scriptCore);
}