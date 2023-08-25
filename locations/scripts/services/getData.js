const apiUrl = "https://rickandmortyapi.com/api";


const getLocations = async(page) => {

    try {
        const res = await fetch(`${apiUrl}/location?page=${page}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log("Error:" + error);
    }
}



export { getLocations };