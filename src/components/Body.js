import RestaurantCard from './RestaurantCard'
// import { restaurantList, swiggy_api_URL } from '../config'
import { useState } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import { searchRestaurants } from '../utils/helper'
import useGetRestaurant from '../utils/useGetRestaurant'
import useIsOnline from '../utils/useIsOnline'

const Body = () => {
    const [searchText, setSearchText] = useState("");
    
    const {allRestaurants, filteredRestaurants, setFilteredRestaurants} = useGetRestaurant()
    const handleInputEnter = (e) => {
        setSearchText(e.target.value)
    }
    
    const isOnline = useIsOnline()

    if(!isOnline) return <h1>🔴 It looks like you are offline</h1>

    // early return
    if(!allRestaurants) return null;

    return (
        (allRestaurants?.length === 0) ?
            <div className='body'>
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
                    >Search</button>
                </div>
                <Shimmer />
            </div> :
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
                            const filteredData = searchRestaurants(searchText, allRestaurants)
                            setFilteredRestaurants(filteredData)
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
                    { (filteredRestaurants.length === 0) ? 
                        <h1>No result found! Try Again</h1> : 
                        filteredRestaurants.map((restraunt) => {
                            return (
                                <Link to={"/restaurant/"+restraunt.info.id}  key={restraunt.info.id}>
                                    <RestaurantCard restaurant={restraunt.info} />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
    )
}

export default Body