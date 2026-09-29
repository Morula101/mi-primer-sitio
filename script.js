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

    const elementos = document.querySelectorAll(".reveal");

    const observador = new IntersectionObserver(

        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                    // Dejamos de observar el elemento
                    // después de mostrarlo.
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
                    const objetivo = Number(contador.dataset.target);

                    let numeroActual = 0;

                    const duracion = 1500;
                    const intervalo = 30;

                    const incremento = objetivo / (duracion / intervalo);

                    const animacion = setInterval(function () {

                        numeroActual += incremento;

                        if (numeroActual >= objetivo) {

                            numeroActual = objetivo;

                            clearInterval(animacion);

                        }

                        contador.textContent = Math.floor(numeroActual);

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
