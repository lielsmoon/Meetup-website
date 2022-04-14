import { createContext, useState } from "react";

const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
});

export function FavoriteContextProvider({ children }) {
    const [userFavorites, setUserFavorites] = useState([]);

    const addFavoriteHandler = (favoriteMeetup) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    };

    const removeFavoriteHandler = (meetupId) => {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
        });
    };

    const itemIsFavoriteHandler = (meetupId) => {
        return userFavorites.some((meetup) => meetupId === meetup.id);
    };
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };
    console.log(userFavorites);
    return (
        <FavoriteContext.Provider value={context}>
            {children}
        </FavoriteContext.Provider>
    );
}

export default FavoriteContext;
