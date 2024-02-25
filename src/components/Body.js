import RestaurantCard from './RestaurantCard'
import { restaurantList } from '../config'
import { useState } from 'react'

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList)
    const handleInputEnter = (e) => {
        setSearchText(e.target.value)
    }
    const searchRestaurants = (searchText, restaurants) => {
        if(searchText === "") { 
            return restaurantList; 
        }
        const filteredData = restaurants.filter((restaurant) => { return restaurant.info.name.includes(searchText) })
        return filteredData
    }
    return (
        <div className="body">
            <div className='search-bar'>
                <input
                    type='text'
                    placeholder='search restaurant'
                    className='search-input'
                    value={searchText}
                    onChange={handleInputEnter}
                />
                <button
                    className='search-btn'
                    onClick={() => {
                        const filteredData = searchRestaurants(searchText, restaurants)
                        setRestaurants(filteredData)
                    }}
                >Search</button>
            </div>
            <div className="restaurant-list">
                {/* <RestrauntCard restaurant={restrauntList[0].info} />
            <RestrauntCard restaurant={restrauntList[1].info} />
            <RestrauntCard restaurant={restrauntList[2].info} />
            <RestrauntCard restaurant={restrauntList[3].info} />
            <RestrauntCard restaurant={restrauntList[4].info} />
            <RestrauntCard restaurant={restrauntList[5].info} />
            <RestrauntCard restaurant={restrauntList[6].info} />
            <RestrauntCard restaurant={restrauntList[7].info} />
            <RestrauntCard restaurant={restrauntList[8].info} />
            <RestrauntCard restaurant={restrauntList[9].info} />
            <RestrauntCard restaurant={restrauntList[10].info} /> */}
                {restaurants.map((restraunt) => {
                    return <RestaurantCard restaurant={restraunt.info} key={restraunt.info.id} />
                })}
            </div>
        </div>
    )
}

export default Body