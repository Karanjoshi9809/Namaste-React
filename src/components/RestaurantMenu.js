import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RESTAURANT_TYPE_KEY, swiggy_menu_api_URL, MENU_ITEM_TYPE_KEY, IMG_CDN_URL } from "../config";

function RestaurantMenu() {
    const [restaurant, setRestaurant] = useState(null)
    const [menuItems, setMenuItems] = useState([])
    const { id } = useParams();
    useEffect(() => {
        getMenu()
    }, [])
    async function getMenu() {
        try {
            const response = await fetch(swiggy_menu_api_URL + id);
            const json = await response.json();

            // Set restaurant data
            const restaurantData = json?.data?.cards?.map(x => x.card)?.
                find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
            setRestaurant(restaurantData);

            // Set menu item data
            const menuItemsData = json?.data?.cards.find(x => x.groupedCard)?.
                groupedCard?.cardGroupMap?.REGULAR?.
                cards?.map(x => x.card?.card)?.
                filter(x => x['@type'] == MENU_ITEM_TYPE_KEY)?.
                map(x => x.itemCards).flat().map(x => x.card?.info) || [];

            const uniqueMenuItems = [];
            menuItemsData.forEach((item) => {
                if (!uniqueMenuItems.find(x => x.id === item.id)) {
                    uniqueMenuItems.push(item);
                }
            })
            setMenuItems(uniqueMenuItems);
        } catch (error) {
            setMenuItems([]);
            setRestaurant(null);
            console.log(error);
        }
    }
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