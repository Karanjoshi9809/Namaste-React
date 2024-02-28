import { useParams } from "react-router-dom";

function RestaurantMenu() {
    const data = useParams();
    console.log(data);
    return ( 
        <h1>{`Restaurant : ${data.id}`}</h1>
    );
}

export default RestaurantMenu;