/* iframe == nope */
window.top.location !== window.location && (window.top.location = window.location);

import { bindSidebar } from "./modules/sidebar.js";
import { loadTemplate } from "./modules/template.js";

$(document).ready(function() {
    loadTemplate().then((resultados) => {
        // Hacer algo con los datos
        bindSidebar();

        // Continuar con el código principal aquí
    }).catch((error) => {
        // Manejar errores
        console.error(error);
    });
});
