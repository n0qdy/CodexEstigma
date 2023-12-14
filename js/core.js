/* iframe == nope */
window.top.location !== window.location && (window.top.location = window.location);

import { loadTemplate } from "./modules/template.js";


$(document).ready(function() {
    loadTemplate();
});
