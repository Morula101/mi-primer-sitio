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

    if (info.classList.contains("active")) {

        info.classList.remove("active");

    } else {

        info.classList.add("active");

    }

}


/* ======================================
   ANIMACIÓN AL BAJAR
====================================== */

document.addEventListener("DOMContentLoaded", function () {

    const elementos = document.querySelectorAll(".reveal");

    const observador = new IntersectionObserver(

        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

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
   BOTONES DE NAVEGACIÓN
====================================== */

function irA(seccion) {

    const elemento = document.getElementById(seccion);

    if (elemento) {

        elemento.scrollIntoView({
            behavior: "smooth"
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
