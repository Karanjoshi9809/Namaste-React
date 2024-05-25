import { useState, useEffect } from "react"
import { swiggy_api_URL } from "../config"
function useGetRestaurant(){
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(() => {
        // API call
        getRestaurants()
    }, [])

    async function getRestaurants() {
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.54702956252698&lng=72.92605586349966&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const data = await fetch(swiggy_api_URL)
        const JsonData = await data.json()
        // console.log(JsonData)
        setAllRestaurants(JsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(JsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return {allRestaurants, filteredRestaurants, setFilteredRestaurants}
}

export default useGetRestaurant