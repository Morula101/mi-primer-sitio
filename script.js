/* ======================================
   CONFIGURACIÓN GENERAL
====================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Poppins", sans-serif;
    color: #eafaff;

    background:
        linear-gradient(
            180deg,
            #001b35 0%,
            #003b5c 25%,
            #006b85 55%,
            #003f63 80%,
            #001525 100%
        );

    overflow-x: hidden;
}


/* ======================================
   BARRA DE NAVEGACIÓN
====================================== */

.navbar {
    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    padding: 18px 5%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: rgba(0, 20, 40, 0.75);

    backdrop-filter: blur(15px);

    border-bottom: 1px solid rgba(255,255,255,0.1);

    z-index: 1000;
}

.logo {
    font-size: 21px;
    font-weight: 800;
    letter-spacing: 2px;
}

.logo span {
    color: #50ddff;
}

.nav-links {
    display: flex;
    gap: 5px;
}

.nav-links button {
    background: transparent;
    border: none;

    color: white;

    padding: 9px 13px;

    cursor: pointer;

    font-family: inherit;
    font-size: 13px;

    border-radius: 20px;

    transition: 0.3s;
}

.nav-links button:hover {
    background: #1bbddd;
    color: #002235;
}


/* ======================================
   HERO
====================================== */

.hero {

    height: 100vh;
    min-height: 650px;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    position: relative;

    background:
        linear-gradient(
            rgba(0, 20, 45, 0.5),
            rgba(0, 70, 100, 0.75)
        ),
        url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=90");

    background-size: cover;
    background-position: center;

    background-attachment: fixed;
}

.hero-content {
    max-width: 900px;
    padding: 30px;
}

.mini-title {
    color: #6de7ff;
    font-size: 14px;
    letter-spacing: 5px;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: clamp(60px, 10vw, 130px);
    line-height: 0.9;
    font-weight: 800;

    text-shadow: 0 10px 30px rgba(0,0,0,0.4);
}

.hero h1 span {
    color: #59ddff;
}

.hero p:not(.mini-title) {
    max-width: 700px;

    margin: 30px auto;

    font-size: 19px;
    line-height: 1.8;
}

.main-button,
.small-button {
    border: none;

    background: #52ddff;
    color: #00263c;

    padding: 15px 25px;

    border-radius: 30px;

    font-family: inherit;
    font-weight: 700;

    cursor: pointer;

    transition: 0.3s;
}

.main-button:hover,
.small-button:hover {
    transform: translateY(-4px);

    box-shadow:
        0 10px 30px rgba(50,220,255,0.35);
}

.scroll-indicator {
    position: absolute;

    bottom: 25px;

    font-size: 30px;

    animation: bounce 2s infinite;
}

@keyframes bounce {

    0%,100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(10px);
    }

}


/* ======================================
   SECCIONES
====================================== */

.section {

    max-width: 1200px;

    margin: 130px auto;

    padding: 40px;

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 70px;

    align-items: center;
}

.section.reverse {
    grid-template-columns: 1fr 1fr;
}

.text h2,
.center-title h2,
.final-section h2 {

    font-size: clamp(35px, 5vw, 60px);

    line-height: 1.1;

    margin: 15px 0 25px;
}

.text p,
.center-title p,
.final-section p {

    color: #c6e9f2;

    line-height: 1.9;

    margin-bottom: 18px;

    font-size: 16px;
}

.section-number {

    color: #5de4ff;

    font-size: 13px;

    font-weight: 700;

    letter-spacing: 3px;
}


/* ======================================
   IMÁGENES
====================================== */

.image-container {

    overflow: hidden;

    border-radius: 30px;

    box-shadow:
        0 25px 60px rgba(0,0,0,0.35);
}

.image-container img {

    width: 100%;

    display: block;

    aspect-ratio: 4 / 5;

    object-fit: cover;

    transition: transform 0.8s;
}

.image-container:hover img {
    transform: scale(1.06);
}


/* ======================================
   INFO EXTRA
====================================== */

.extra-info {

    max-height: 0;

    overflow: hidden;

    opacity: 0;

    transition: 0.5s;
}

.extra-info.active {

    max-height: 300px;

    opacity: 1;

    margin-top: 20px;
}

.fact-box {

    padding: 20px;

    margin-top: 25px;

    border-left: 4px solid #4de0ff;

    background: rgba(0, 0, 0, 0.18);

    border-radius: 10px;
}


/* ======================================
   SECCIÓN OSCURA
====================================== */

.dark-section {

    padding: 130px 7%;

    background:
        linear-gradient(
            180deg,
            rgba(0,10,30,0.2),
            rgba(0,10,30,0.8)
        );
}

.center-title {

    max-width: 800px;

    text-align: center;

    margin: 0 auto 70px;
}

.cards {

    max-width: 1200px;

    margin: auto;

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 20px;
}

.impact-card {

    padding: 30px;

    min-height: 270px;

    background:
        rgba(255,255,255,0.07);

    border:
        1px solid rgba(255,255,255,0.1);

    border-radius: 25px;

    transition: 0.4s;
}

.impact-card:hover {

    transform: translateY(-10px);

    background:
        rgba(255,255,255,0.12);
}

.icon {
    font-size: 45px;
    margin-bottom: 20px;
}

.impact-card h3 {
    margin-bottom: 15px;
}

.impact-card p {
    color: #b9dce6;
    line-height: 1.7;
}


/* ======================================
   ESTADÍSTICAS
====================================== */

.statistics {
    display: block;
}

.stat-grid {

    max-width: 1100px;

    margin: auto;

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 25px;
}

.stat {

    text-align: center;

    padding: 40px 25px;

    border-radius: 25px;

    background:
        rgba(0,0,0,0.2);

    border:
        1px solid rgba(255,255,255,0.1);
}

.stat strong {

    font-size: 75px;

    color: #59e4ff;

    font-weight: 800;
}

.stat > span {

    font-size: 35px;

    color: #59e4ff;
}

.stat p {

    color: #c4e4eb;

    line-height: 1.6;

    margin-top: 15px;
}


/* ======================================
   GRÁFICOS
====================================== */

.chart-section {

    padding: 130px 7%;

    background:
        rgba(0,0,0,0.18);
}

.chart {

    max-width: 1000px;

    margin: auto;

    padding: 45px;

    background:
        rgba(255,255,255,0.06);

    border-radius: 25px;
}

.country {

    display: grid;

    grid-template-columns:
        100px 1fr 60px;

    gap: 15px;

    align-items: center;

    margin: 25px 0;
}

.bar {

    height: 18px;

    background:
        rgba(255,255,255,0.12);

    border-radius: 20px;

    overflow: hidden;
}

.bar-fill {

    height: 100%;

    background:
        linear-gradient(
            90deg,
            #18a9d1,
            #6cecff
        );

    border-radius: 20px;

    width: 0;

    transition:
        width 1.5s ease;
}


/* ======================================
   GALERÍA
====================================== */

.gallery-section {

    padding: 130px 7%;
}

.gallery {

    max-width: 1200px;

    margin: auto;

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 25px;
}

.gallery-item {

    position: relative;

    height: 400px;

    overflow: hidden;

    border-radius: 25px;

    cursor: pointer;
}

.gallery-item img {

    width: 100%;
    height: 100%;

    object-fit: cover;

    transition:
        transform 0.8s,
        filter 0.8s;
}

.gallery-item:hover img {

    transform: scale(1.1);

    filter: brightness(0.6);
}

.gallery-text {

    position: absolute;

    bottom: 0;

    left: 0;

    width: 100%;

    padding: 35px;

    background:
        linear-gradient(
            transparent,
            rgba(0,0,0,0.8)
        );
}

.gallery-text h3 {

    font-size: 28px;

    margin-bottom: 5px;
}


/* ======================================
   FINAL
====================================== */

.final-section {

    max-width: 900px;

    margin: 130px auto;

    padding: 60px;

    text-align: center;

    background:
        linear-gradient(
            135deg,
            rgba(0,170,220,0.25),
            rgba(0,40,80,0.5)
        );

    border-radius: 35px;
}


/* ======================================
   CRÉDITOS
====================================== */

.credits {

    text-align: center;

    padding: 100px 20px;

    background:
        rgba(0,0,0,0.3);
}

.credits h2 {
    font-size: 40px;
    margin-bottom: 20px;
}

.credits p {
    color: #b7dce5;
    margin: 10px;
}


/* ======================================
   FOOTER
====================================== */

footer {

    padding: 50px;

    text-align: center;

    background: #00101e;
}

footer p {

    color: #91bac6;

    margin: 15px 0 25px;
}

footer button {

    border: none;

    background: transparent;

    color: #5de4ff;

    cursor: pointer;

    font-family: inherit;
}


/* ======================================
   ANIMACIÓN AL HACER SCROLL
====================================== */

.reveal {

    opacity: 0;

    transform:
        translateY(80px);

    filter:
        blur(8px);

    transition:
        opacity 1s ease,
        transform 1s ease,
        filter 1s ease;
}

.reveal.visible {

    opacity: 1;

    transform:
        translateY(0);

    filter:
        blur(0);
}


/* ======================================
   RESPONSIVE
====================================== */

@media (max-width: 900px) {

    .navbar {
        flex-direction: column;
        gap: 10px;
    }

    .nav-links {
        flex-wrap: wrap;
        justify-content: center;
    }

    .section,
    .section.reverse {

        grid-template-columns: 1fr;

        margin: 80px auto;

        padding: 25px;
    }

    .cards {

        grid-template-columns:
            repeat(2, 1fr);
    }

    .stat-grid {

        grid-template-columns: 1fr;
    }

}


@media (max-width: 600px) {

    .hero h1 {
        font-size: 55px;
    }

    .hero p:not(.mini-title) {
        font-size: 16px;
    }

    .cards {

        grid-template-columns: 1fr;
    }

    .gallery {

        grid-template-columns: 1fr;
    }

    .gallery-item {
        height: 320px;
    }

    .country {

        grid-template-columns:
            70px 1fr 45px;

        font-size: 12px;
    }

}
