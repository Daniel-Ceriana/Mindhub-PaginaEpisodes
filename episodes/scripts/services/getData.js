const apiUrl = "https://rickandmortyapi.com/api";


const getEpisodes = async(page) => {

    try {
        const res = await fetch(`${apiUrl}/episode?page=${page}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error:" + error);
    }
}



export { getEpisodes };