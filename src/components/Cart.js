import { useDispatch, useSelector } from "react-redux"
import { IMG_CDN_URL } from "../config";
import { useEffect, useState } from "react"
import { clearCart, removeItem } from "../utils/cartSlice"

function Cart() {
    const cartItems = useSelector(store => store.cart.items)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        const total = cartItems.reduce((total, item) => {
            return total = total + ((item?.price) / 100)
        }, 0)
        setTotal(total)
    }, [cartItems])
    const dispatch = useDispatch()
    const removeFoodItem = (item) => {
        dispatch(removeItem(item))
    }
    const clearCartItems = () => {
        dispatch(clearCart())
    }
    return (
        <>
            <h1 className="font-bold text-xl ml-4">Cart Items - {cartItems.length}</h1>
            <button 
                className="border-2 ml-4 px-4 rounded-md mt-2 bg-red-400 text-lg"
                onClick={() => clearCartItems()}
            >
                Clear Cart
            </button>
            <div className="border-2 m-2 rounded-md p-8 flex justify-between">
                <div>
                    {cartItems.map((item) => {
                        return (
                            <div key={item?.id} className="border-2 rounded-md my-2 p-4 flex justify-between w-[40vw]">
                                <div className="">
                                    <img src={IMG_CDN_URL + item?.imageId} alt="food img" className="w-20 h-20 rounded-md" />
                                </div>
                                <div className="mx-4 w-[30rem]">
                                    <p className="font-bold">{item?.name}</p>
                                    <p>Price : {(item?.price) / 100}</p>
                                </div>
                                <div>
                                    <button
                                        className="rounded-md px-2 bg-cyan-300 hover:bg-cyan-400"
                                        onClick={() => removeFoodItem(item)}
                                    >
                                        - Remove Item
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="w-[30vw] flex flex-col border-2 rounded-md mx-4 h-[20rem] mt-4 px-4 pt-1">
                    <h1 className="text-2xl font-extrabold text-center my-4">Invoice</h1>
                    {cartItems.map((item) => {
                        return (
                            <div className="flex justify-between">
                                <p className="font-bold">{item?.name}</p>
                                <p>{(item?.price) / 100}</p>
                            </div>
                        )
                    })}
                    <hr className="my-4"/>
                    <h1 className="text-xl font-bold self-end">Total : {total}</h1>
                </div>
            </div>
        </>
    );
}

export default Cart;