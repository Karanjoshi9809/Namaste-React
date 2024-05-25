import { IMG_CDN_URL } from '../config'

const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="flex border-2 flex-col hover:scale-95 rounded-lg shadow-md m-2 w-[18rem] h-[22rem] overflow-hidden">
            <div className='w-[16rem] ml-[1rem] h-[14rem] overflow-hidden rounded-xl flex justify-center items-center my-2'>
                <img className='w-[16rem] h-[14rem] rounded-lg' src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
            </div>
            <div className='p-2'>
                <h2 className='font-extrabold font-sans text-2xl'>{restaurant.name.slice(0, 20)}</h2>
                <h3 className='text-slate-400 py-2 w-[15rem] overflow-hidden h-[2rem]'>{restaurant.cuisines.join(", ")}</h3>
                <div className='mt-8 flex justify-between items-center font-medium'>
                    <h4 className='bg-[#00ad1d] w-14 px-1 rounded-md justify-self-end text-white'> <i className="fa-solid fa-star" aria-hidden="true"></i> {restaurant.avgRatingString}</h4>
                    ●
                    <h4 className=''>{restaurant.sla.deliveryTime} mins</h4>
                    ●
                    <h4 className=''>{restaurant.costForTwo ?? "₹200 for two"}</h4>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard