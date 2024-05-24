import RestaurantCard from './RestaurantCard'
// import { restaurantList, swiggy_api_URL } from '../config'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import { searchRestaurants } from '../utils/helper'
import useGetRestaurant from '../utils/useGetRestaurant'
import useIsOnline from '../utils/useIsOnline'
import offlinePicture from '../assets/Offline-Notice.jpg'

const Body = () => {
    const [searchText, setSearchText] = useState("");
    
    const {allRestaurants, filteredRestaurants, setFilteredRestaurants} = useGetRestaurant()
    const handleInputEnter = (e) => {
        setSearchText(e.target.value)
    }

    useEffect(() => {
        const data = searchRestaurants(searchText, allRestaurants);
        // update the state - restaurants
        setFilteredRestaurants(data);
    }, [searchText]);
    
    const isOnline = useIsOnline()

    if(!isOnline) return <div className='flex justify-center items-center w-[100vw] h-[70vh] flex-col gap-4'>
                                {/* <p className='text-2xl font-medium'>🔴It looks like you are offline!</p> */}
                                <img src={offlinePicture} alt="offline-notice" className='rounded-xl' />
                                <p className='text-xl font-medium'>🔴 Please check your internet connection</p>
                         </div>

    // early return
    if(!allRestaurants) return null;

    return (
        (allRestaurants?.length === 0) ?
            <div id='body'>
                <div className='my-4 mx-2 flex justify-center'>
                    <input
                        type='text'
                        placeholder='Search a restaurant you want...'
                        className='border-2 rounded-md px-4 mr-2 h-[2.5rem] w-[25rem]'
                        value={searchText}
                        onChange={handleInputEnter}
                    />
                    <button
                        className='border-2 px-[1.2rem] h-[2.5rem]  font-medium text-base rounded-md text-white bg-[#374151] hover:bg-[#2c3035]'
                    >Search</button>
                </div>
                <Shimmer />
            </div> :
            <div id="body">
                <div className='my-4 mx-2 flex justify-center'>
                    <input
                        type='text'
                        placeholder='Search a restaurant you want...'
                        className='border-2 rounded-md px-4 mr-2 h-[2.5rem] w-[25rem]' 
                        value={searchText}
                        onChange={handleInputEnter}
                    />
                    <button
                        className='border-2 px-[1.2rem] font-medium text-base rounded-md text-white bg-[#374151] hover:bg-[#2c3035] h-[2.5rem] '
                        onClick={() => {
                            const filteredData = searchRestaurants(searchText, allRestaurants)
                            setFilteredRestaurants(filteredData)
                        }}
                    >Search</button>
                </div>
                <div className="flex flex-wrap justify-center items-center">
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
                        <h1 className='text-2xl font-bold h-[60vh]'>No result found for {searchText}! Try again!</h1> : 
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