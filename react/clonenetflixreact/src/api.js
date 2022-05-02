const API_KEY = "97a0db7dc9bce85a6e85c7f91ec9e105" ;

const categorias = [
    {
        name: "trending",
        title: "em alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,

    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    },
    {
        name: "topRated",
        title: "Populares",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,

    },
    {
        name: "Comedy",
        title: "Comedia",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,

    },
    {
        name: "documentaries",
        title: "Documentarios",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,

    }
]

export const getMovies = async (path) =>{
    try{  
        let url = `https://api.themoviedb.org/3/${path}`;
        const response = await fetch(url);
        return await response.jason();  
    }catch (error){
        console.log("error getMovies: ", error);
    }
};
