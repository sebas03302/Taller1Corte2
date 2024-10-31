(function () {
    const mainContainer = document.getElementById("contenidoWeb");

    // Función para mostrar la página de inicio
    function getHomePage() {
        return `
            <header>
                <h1>Bienvenido a la Página de Deadpool</h1>
                <p>Explora las siguientes paginas para conocer màs sobre Deadpool y sus frases memorables.</p>
            </header>
            <section>
                <div id="menu">
                    <a href="#" data-action="showCharacters">Personajes</a> |
                    <a href="#" data-action="showQuotes">Frases Célebres</a>
                </div>
            </section>
            <article id="descripcion">
                <h2>¿Quién es Wade Wilson?</h2>
                <p>Deadpool, también conocido como Wade Wilson, es un anti-heroe conocido por su humor sarcástico y habilidades de combate .</p>
                <figure>
                    <img src="recursos/Imagen 1.jpeg" alt="Wade Wilson" width="250">
                </figure>
            </article>
        `;
    }

    // Función para mostrar la sección de personajes
    function getCharactersPage() {
        return `
            <header>
                <h1>Personajes del Universo de Wade</h1>
            </header>
            <section>
                <article>
                    <h2>(Deadpool) Wade Wilson</h2>
                    <p>Deadpool,tambien conocido como Wade wilson, es el protagonista de la pelicula, Es un mercenario conocido por su humor unico y habilidades combate.</p>
                    <img src="recursos/Imagen 1.jpeg" alt="Wade Wilson" width="280">
                </article>
                <article>
                    <h3>Vanessa Carlysle</h3>
                    <p>La pareja de Wade, una figura central en su vida y motivación.</p>
                    <img src="recursos/Imagen 2.jpeg" alt="Vanessa Carlysle" width="280">
                </article>
                <article>
                    <h3>Piotr Rasputin (Coloso)</h3>
                    <p>Un X-Men que intenta guiar a Wade hacia la heroicidad.</p>
                    <img src="recursos/Imagen 3.jpeg" alt="Coloso" width="280">
                </article>
            </section>
            <footer>
                <a href="#" data-action="showHome">Volver al Menú Principal</a>
            </footer>
        `;
    }

    // Función para mostrar la sección de frases célebres
    function getQuotesPage() {
        return `
            <header>
                <h1>Frases Célebres de Deadpool</h1>
            </header>
            <section>
                <p>Algunas de las frases más icónicas del antihéroe:</p>
                
                <ul>
                    <li><em>"Máximo esfuerzo siempre!"</em></li>
                    <li><em>"Voy a hacerte lo que Limp Bizkit le hizo a la música en los '90."</em></li>
                    <li><em>"¿Superhéroe? No, mira cómo ese tipo terminó como kebab."</em></li>
                </ul>
            </section>
            <section>
                <h2>Video de Escenas Memorables</h2>
                <video width="360" height="320" controls>
                    <source src="recursos/Video.mp4" type="video/mp4">
                </video>
            </section>
            <footer>
                <a href="#" data-action="showHome">Volver al Menú Principal</a>
            </footer>
        `;
    }

    // Delegación de eventos en el contenedor principal
    mainContainer.addEventListener("click", function (e) {
        const action = e.target.getAttribute("data-action");
        if (action) {
            e.preventDefault();
            switch (action) {
                case "showHome":
                    mainContainer.innerHTML = getHomePage();
                    break;
                case "showCharacters":
                    mainContainer.innerHTML = getCharactersPage();
                    break;
                case "showQuotes":
                    mainContainer.innerHTML = getQuotesPage();
                    break;
            }
        }
    });

    // Cargar la página de inicio al cargar el script
    mainContainer.innerHTML = getHomePage();
})();
