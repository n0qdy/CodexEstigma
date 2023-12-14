document.addEventListener("DOMContentLoaded", function() {
    let jquery = './js/jquery-3.7.1.min.js';
    let core = './js/core.js';

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