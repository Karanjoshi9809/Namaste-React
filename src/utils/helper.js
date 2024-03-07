export const searchRestaurants = (searchText, restaurants) => {
    const filteredData = restaurants.filter((restaurant) => { return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) })
    return filteredData
}