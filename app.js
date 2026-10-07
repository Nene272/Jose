// =========================
// MENÚ RESPONSIVE
// =========================

// Obtenemos el botón del menú
const m = document.getElementById("menu");

// Obtenemos la barra de navegación
const n = document.getElementById("nav");


// Verificamos que el botón exista
if (m) {

    // Cuando se hace clic en el botón
    m.onclick = () => {

        // Agrega o quita la clase "open"
        n.classList.toggle("open");

    };

}



// =========================
// FORMULARIO DE CONTACTO
// =========================

// Obtenemos el formulario
const f = document.getElementById("contactForm");


// Verificamos que el formulario exista
if (f) {

    // Evento que se ejecuta al enviar el formulario
    f.onsubmit = e => {

        // Evita que la página se recargue
        e.preventDefault();


        // Obtenemos el elemento donde aparecerá la respuesta
        let r = document.getElementById("respuesta");


        // Obtenemos el nombre
        let name = document
            .getElementById("nombre")
            .value
            .trim();


        // Obtenemos el correo
        let email = document
            .getElementById("email")
            .value
            .trim();


        // Validamos que nombre y correo no estén vacíos
        if (!name || !email) {

            r.textContent = "Completa los campos requeridos.";

            return;
        }


        // Mensaje si los datos son correctos
        r.textContent =
            "Solicitud enviada correctamente. Te contactaremos pronto.";

    };

}