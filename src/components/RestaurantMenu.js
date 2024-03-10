import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "../config";

function RestaurantMenu() {

    const { id } = useParams();

    const { restaurant, menuItems } = useRestaurant(id)

    return (
        <div className="flex flex-col justify-center items-center box-border">
            <div className="flex flex-col items-center px-4 py-6 w-full bg-gray-900 text-white">
                <h1 className="text-sm font-bold text-center">{`Restaurant : ${id}`}</h1>
                <div className="flex gap-12 justify-center items-center">
                    <div>
                        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} className="my-4 h-60 w-60 rounded-lg" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-extrabold">{restaurant?.name}</h2>
                        <h3 className="text-lg font-bold">{restaurant?.city}</h3>
                        <h3 className="text-lg font-bold">Area : {restaurant?.areaName}</h3>
                        <h3 className="font-bold bg-green-500 pl-2 py-1 w-16 rounded-md">{restaurant?.avgRating} ★</h3>
                    </div>
                </div>
            </div>
            <div className="my-4 py-4 px-6 flex flex-col border-2 rounded-lg">
                <h2 className="border-b-2 text-xl font-bold">Menu Items - {menuItems.length} Items</h2>
                {menuItems?.map((item) => {
                    // return <p key={item?.id}>{item?.name}</p>
                    return (
                        <div
                            key={item?.id}
                            className="border-2 my-2 rounded-md p-4 flex justify-between items-center"
                        >
                            <div>
                                <img src={IMG_CDN_URL + item?.imageId} alt="food img" className="w-20 h-20 rounded-md" />
                            </div>
                            <div className="mx-4 w-[30rem]">
                                <p className="font-bold">{item?.name}</p>
                                <p>Price : {(item?.price) / 100}</p>
                                <p className="text-base bg-green-400 w-14 pl-1 rounded-md">{item?.ratings?.aggregatedRating?.rating} ★</p>
                            </div>
                            <div className="flex">
                                <button className="rounded-md px-2 bg-cyan-300 hover:bg-cyan-400">+ Add Item</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default RestaurantMenu;