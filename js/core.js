/* iframe == nope */
window.top.location !== window.location && (window.top.location = window.location);

import { bindHeader } from "./modules/header.js";
import { bindSidebar } from "./modules/sidebar.js";
import { tooltips } from "./modules/tooltips.js";
import { loadTemplate } from "./modules/template.js";

$(document).ready(function() {
    loadTemplate().then((resultados) => {
        bindHeader();
        bindSidebar();
        tooltips();
        console.log(screen.width);
    }).catch((error) => {
        console.error(error);
    });
});
