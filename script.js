/* ======================================
   OCEANINFO - JAVASCRIPT
====================================== */


/* ======================================
   BOTÓN "SABER MÁS"
====================================== */

function mostrarInfo() {

    const info = document.getElementById("info-extra");

    if (!info) {
        return;
    }

    info.classList.toggle("active");
}


/* ======================================
   BOTONES DE NAVEGACIÓN
====================================== */

function irA(seccion) {

    const elemento = document.getElementById(seccion);

    if (elemento) {

        elemento.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* ======================================
   VOLVER ARRIBA
====================================== */

function volverArriba() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ======================================
   ANIMACIÓN AL BAJAR
====================================== */

document.addEventListener("DOMContentLoaded", function () {

    document.documentElement.classList.add("js-enabled");

    const elementos = document.querySelectorAll(".reveal");

    const observador = new IntersectionObserver(

        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                    observador.unobserve(entrada.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    elementos.forEach(function (elemento) {

        observador.observe(elemento);

    });

});


/* ======================================
   CONTADORES DE ESTADÍSTICAS
====================================== */

document.addEventListener("DOMContentLoaded", function () {

    const contadores = document.querySelectorAll(".counter");

    const observadorContadores = new IntersectionObserver(

        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    const contador = entrada.target;

                    const objetivo = Number(
                        contador.dataset.target
                    );

                    let numeroActual = 0;

                    const duracion = 1500;

                    const intervalo = 30;

                    const incremento =
                        objetivo / (duracion / intervalo);


                    const animacion = setInterval(function () {

                        numeroActual += incremento;

                        if (numeroActual >= objetivo) {

                            numeroActual = objetivo;

                            clearInterval(animacion);

                        }

                        contador.textContent =
                            Math.floor(numeroActual);

                    }, intervalo);


                    observadorContadores.unobserve(contador);

                }

            });

        },

        {
            threshold: 0.5
        }

    );


    contadores.forEach(function (contador) {

        observadorContadores.observe(contador);

    });

});


/* ======================================
   SISTEMA DE IDIOMAS
   ESPAÑOL / ITALIANO
====================================== */

let idiomaActual = "es";


function cambiarIdioma() {

    const elementos =
        document.querySelectorAll(
            "[data-es][data-it]"
        );


    /* ==============================
       ESPAÑOL → ITALIANO
    ============================== */

    if (idiomaActual === "es") {

        elementos.forEach(function (elemento) {

            elemento.textContent =
                elemento.dataset.it;

        });


        /* Cambiar ALT de imágenes */

        const imagenes =
            document.querySelectorAll(
                "[data-alt-es][data-alt-it]"
            );


        imagenes.forEach(function (imagen) {

            imagen.alt =
                imagen.dataset.altIt;

        });


        /* Cambiar título de la pestaña */

        document.title =
            "Pesca a Strascico | Oceani a Rischio";


        /* Cambiar idioma del HTML */

        document.documentElement.lang =
            "it";


        /* Cambiar texto del botón */

        const botonIdioma =
            document.querySelector(
                ".language-button"
            );


        if (botonIdioma) {

            botonIdioma.textContent =
                "🇪🇸 Español";

        }


        idiomaActual = "it";

    }


    /* ==============================
       ITALIANO → ESPAÑOL
    ============================== */

    else {

        elementos.forEach(function (elemento) {

            elemento.textContent =
                elemento.dataset.es;

        });


        /* Volver ALT al español */

        const imagenes =
            document.querySelectorAll(
                "[data-alt-es][data-alt-it]"
            );


        imagenes.forEach(function (imagen) {

            imagen.alt =
                imagen.dataset.altEs;

        });


        /* Volver título de la pestaña */

        document.title =
            "Pesca de Arrastre | Océanos en Riesgo";


        /* Volver idioma HTML */

        document.documentElement.lang =
            "es";


        /* Volver botón a italiano */

        const botonIdioma =
            document.querySelector(
                ".language-button"
            );


        if (botonIdioma) {

            botonIdioma.textContent =
                "🇮🇹 Italiano";

        }


        idiomaActual = "es";

    }

}
