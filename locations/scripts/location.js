import { getLocations } from "./services/getData.js";

const display = document.querySelector("main")

const locationList = async(page = 1) => {
    try {
        const { results } = await getLocations(page);
        display.textContent = "";
        results.forEach(location => {
            const article = document.createElement('article');
            const createdDate = new Date(location.created);
            article.setAttribute('class', 'location');
            article.innerHTML = `
            <section class="card">
            <article class="card--description">
                <h2>${location.name}</h2>
                <p>${location.type}</p>
                <p>${location.dimension}</p>
                <p>Residents: ${location.residents.length}</p>
                <p>Created: ${createdDate.toDateString()}</p>
                </article>
            <article class="card--info">
            </article>
        </section>


            `
            display.appendChild(article);
        });
    } catch (error) {
        console.log("Error:" + error);
    }
}

locationList(1);