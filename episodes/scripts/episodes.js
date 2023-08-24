import { getEpisodes } from "./services/getData.js";

const display = document.querySelector("main")

const episodeList = async(page = 1) => {
    try {
        const { results } = await getEpisodes(page);
        display.textContent = "";
        results.forEach(episode => {
            const article = document.createElement('article');
            article.setAttribute('class', 'episode');
            article.innerHTML = `
            <section class="card">
            <article class="card--description">
                <h2>${episode.name}</h2>
                <p>${episode.air_date}</p>
                <h3>${episode.episode}</h3>
            </article>
            <article class="card--info">
                <button>+INFO</button>
            </article>
        </section>


            `
            display.appendChild(article);
        });
    } catch (error) {
        console.log("Error:" + error);
    }
}

episodeList();