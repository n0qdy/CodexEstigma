/* iframe == nope */
window.top.location !== window.location && (window.top.location = window.location);

import { bindHeader } from "./modules/header.js";
import { bindSidebar } from "./modules/sidebar.js";
import { loadTemplate } from "./modules/template.js";

$(document).ready(function() {
    loadTemplate().then((resultados) => {
        bindHeader();
        bindSidebar();
    }).catch((error) => {
        console.error(error);
    });
});
