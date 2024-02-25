import {IMG_CDN_URL} from '../config'

const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="card">
            <img src={IMG_CDN_URL+restaurant.cloudinaryImageId} />
            <h2>{restaurant.name}</h2>
            <h3>{restaurant.cuisines.join(", ")}</h3>
            <h4>{restaurant.avgRatingString} stars</h4>
        </div>
    )
}

export default RestaurantCard