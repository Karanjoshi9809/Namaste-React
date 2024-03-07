import { IMG_CDN_URL } from '../config'

const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="flex border-2 flex-col rounded-lg shadow-md m-2 w-[18rem] h-[27rem] overflow-hidden">
            <div className='h-[14rem] overflow-hidden'>
                <img className='w-[18rem] h-[14rem] hover:scale-110' src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
            </div>
            <div className='p-2'>
                <h2 className='font-extrabold font-sans text-2xl'>{restaurant.name.slice(0, 20)}</h2>
                <div className='mt-2 flex justify-between items-center font-medium text-lg'>
                    <h4 className=''>{restaurant.sla.deliveryTime} mins</h4>
                    <h4 className='text-base bg-green-400 w-14 px-1 rounded-md justify-self-end'>{restaurant.avgRatingString} ★</h4>
                </div>
                <h3 className='text-slate-400 py-2 text-lg w-[10rem] h-[0.5rem]'>{restaurant.cuisines.slice(0, 3).join(", ")}</h3>
            </div>
        </div>
    )
}

export default RestaurantCard