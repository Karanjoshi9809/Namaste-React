import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "../config";

function RestaurantMenu() {
    
    const { id } = useParams();
    
    const {restaurant, menuItems} = useRestaurant(id)
    
    return (
        <div className="restaurant-menu">
            <div className="restaurant-summarry">
                <h1>{`Restaurant : ${id}`}</h1>
                <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
                <h2>{restaurant?.name}</h2>
                <h3>{restaurant?.city}</h3>
                <h3>{restaurant?.areaName}</h3>
                <h3>Rating: {restaurant?.avgRating} Stars</h3>
            </div>
            <div className="menu-items">
                <h2>Menu Items</h2>
                {menuItems?.map((item) => {
                    return <p key={item?.id}>{item?.name}</p>
                })}
            </div>
        </div>
    );
}

export default RestaurantMenu;