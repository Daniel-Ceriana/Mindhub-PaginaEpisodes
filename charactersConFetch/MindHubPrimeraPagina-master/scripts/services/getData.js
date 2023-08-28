const apiUrl = "https://rickandmortyapi.com/api";

const getCharacter = async(id) => {
    try {
        const res = await fetch(`${apiUrl}/character/${id}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error:" + error);
    }

}
const getCharacters = async(page) => {
    try {
        const res = await fetch(`${apiUrl}/character?page=${page}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error:" + error);
    }

}

const getEpisodes = async(page) => {

    try {
        const res = await fetch(`${apiUrl}/episode?page=${page}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error:" + error);
    }
}
const getEpisode = async(episode) => {

    try {
        const res = await fetch(`${apiUrl}/episode${episode}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error:" + error);
    }
}
const getEpisodeWithLink = async(link) => {

    try {
        const res = await fetch(`${link}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error:" + error);
    }
}



export { getCharacter, getCharacters, getEpisodes, getEpisode, getEpisodeWithLink };