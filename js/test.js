

window.onload = function() {
    console.log('test.js');
};

$(document).ready(function() {
    let head = $('head');
    head.append('<title>'+$('#section').attr('data-title')+'</title>');
    console.log('GG');
});