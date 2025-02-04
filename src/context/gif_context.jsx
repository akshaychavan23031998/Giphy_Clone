import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useEffect, useState } from "react";

const GifContext = createContext();

const GifProvider = ({children}) => {

    const [gifs, setGifs] = useState([]);
    const [filter, setFilter] = useState("gifs");
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (id) => {
        if(favorites.includes(id)) {
            const updatedFavorites = favorites.filter((itemId) => itemId !== id);
            localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
            setFavorites(updatedFavorites);
        }
        else{
            const updatedFavorites = [...favorites];
            updatedFavorites.push(id);
            localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
            setFavorites(updatedFavorites);
        }
    }

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favoriteGIFs")) || [];
        setFavorites(favorites);
    },[]);

    const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);
    
    // Wrap the context values in an object
    const contextValue = {
        gf,
        gifs,
        setGifs,
        filter,
        setFilter,
        favorites,
        setFavorites, 
        addToFavorites
    };

    return <GifContext.Provider value={contextValue}>{children}</GifContext.Provider>;
};

export const GifState = () => {
    return useContext(GifContext);
};

export default GifProvider;
