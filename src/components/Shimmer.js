function Shimmer() {
    return (
        <div className="flex flex-wrap justify-center items-center">
            {Array(12).fill("").map((e, index) => <div key={index} className="flex border-2 flex-col rounded-lg shadow-md m-2 w-[18rem] h-[27rem] overflow-hidden">
            <div className='h-[14rem] overflow-hidden bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2]'>
                
            </div>
            <div className='p-2'>
                <h2 className='font-extrabold font-sans text-2xl bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2] h-8 rounded-md'></h2>
                <div className='mt-2 flex justify-between items-center'>
                    <h4 className='bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2] w-[8rem] h-8 rounded-md'></h4>
                    <h4 className='w-14 px-1 rounded-md justify-self-end bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2] h-8'></h4>
                </div>
                <h3 className='mt-4 py-2 w-[10rem] h-[2rem] bg-gradient-to-t from-[#eff1f3] to-[#e2e2e2] rounded-md'></h3>
            </div>
            </div>)}
        </div>
    );
}

export default Shimmer;