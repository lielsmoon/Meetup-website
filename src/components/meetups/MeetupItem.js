import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useContext } from "react";
import FavoriteContext from "../../store/favorites-context";

const MeetupItem = ({ image, title, address, description, id }) => {
    const favoritesCtx = useContext(FavoriteContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(id);
        } else {
            favoritesCtx.addFavorite({
                id,
                title,
                description,
                image,
                address,
            });
        }
    }
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={image} alt={title} />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <p>{description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite
                            ? "Remove from favorites"
                            : "To Favorites"}
                    </button>
                </div>
            </Card>
        </li>
    );
};

export default MeetupItem;
