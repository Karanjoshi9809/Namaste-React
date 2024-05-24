function Shimmer() {
    return (
        <div className="flex flex-wrap justify-center items-center">
            {Array(12).fill("").map((e, index) => <div key={index} className="flex border-2 flex-col rounded-lg shadow-md m-2 w-[18rem] h-[22rem] overflow-hidden">
                <div className='h-[14rem] overflow-hidden bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2]'>

                </div>
                <div className='p-2'>
                    <h2 className='font-extrabold font-sans text-2xl bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2] h-8 rounded-md'></h2>
                    <h3 className='mt-4 py-2 w-[17rem] h-[2rem] bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2] rounded-md'></h3>
                    <div className='mt-2 flex justify-between items-center'>
                        <h4 className='w-14 px-1 rounded-md justify-self-end bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2] h-8'></h4>
                        <h4 className='bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2] w-[4rem] h-8 rounded-md'></h4>
                        <h4 className='bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2] w-[4rem] h-8 rounded-md'></h4>
                    </div>
                </div>
            </div>)}
        </div>
    );
}

const shimmer_menu_card_unit = 4;
export const MenuShimmer = () => {
    return (
        <div className="flex flex-col justify-center items-center box-border">
                <div className="flex flex-col items-center px-4 py-6 w-full bg-gray-900 text-white">
                    {/* <h1 className="text-sm font-bold text-center">{`Restaurant : ${id}`}</h1> */}
                    <div className="flex gap-12 justify-center items-center">
                        <div className="bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2] w-[25vw] rounded-lg h-40">
                            
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-extrabold bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2] w-[10rem] h-[1rem] rounded-md"></h2>
                            <h3 className="bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2] w-[5rem] h-[1rem] rounded-md"></h3>
                            <div className="flex gap-10">
                                <h3 className="font-bold pl-2 py-1 w-[4rem] h-[1rem] rounded-md bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2]"></h3>
                                <h3 className="w-[4rem] h-[1rem] rounded-md bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2]"></h3>
                                <h3 className="w-[4rem] h-[1rem] rounded-md bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2]"></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4 py-4 px-6 flex flex-col border-2 rounded-lg">
                    <h2 className="border-b-2 text-xl font-bold"></h2>
                    {Array(4).fill("").map((index) => {
                        // return <p key={item?.id}>{item?.name}</p>
                        return (
                            <div
                                key={index}
                                className="border-2 my-2 rounded-md p-4 flex justify-between items-center"
                            >
                                <div className="w-20 h-20 rounded-md bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2]">
                                
                                </div>
                                <div className="mx-4 w-[30rem]">
                                    <p className="font-bold bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2] w-[5rem] h-4 rounded-md"></p>
                                    <p className="bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2] w-4 h-4 rounded-md"></p>
                                    {/* <p className="text-base bg-green-400 w-14 pl-1 rounded-md bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2] h-4"></p> */}
                                </div>
                                <div className="flex">
                                    <button
                                        className="rounded-md px-2 bg-cyan-300 hover:bg-cyan-400 bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2] w-10 h-4"
                                    >
                                        
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
    )
}

export default Shimmer;