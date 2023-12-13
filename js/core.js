/* iframe == nope */
window.top.location !== window.location && (window.top.location = window.location);

//import { example } from "./modules/search.js";
import { loadTemplate } from "./modules/template.js";


$(document).ready(function() {
    //$('#header-search-button').on('click', example);
    loadTemplate();
});

