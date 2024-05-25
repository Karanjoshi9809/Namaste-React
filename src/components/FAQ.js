import { useState } from "react";
import { FAQdata } from "../utils/helper";
import { FAQCard } from "./FAQCard";

const FAQ = () => {
    const [visibleSection, setVisibleSection] = useState("")
    return (
        <div className="flex flex-col bg-white items-center pb-9">
            <h1 className="mt-12 mb-6 text-2xl text-cyan-900 font-bold">FAQs</h1>
            <h1 className="text-6xl font-serif font-bold text-black text-center max-[430px]:text-3xl">Frequently Asked Questions</h1>
            <h1 className="text-3xl mt-6 mb-14 text-gray-400 max-[430px]:text-xl">Have Questions? We are here to help</h1>
            {FAQdata.map((data) => {
                return (
                    <div key={data?.id}>
                        <FAQCard
                            isVisible={visibleSection === data?.id} 
                            component={data?.id}
                            setIsVisible={setVisibleSection}
                            que={data.que} 
                            info={data.ans} />
                    </div>
                )
            })}
            <div className="flex flex-col mt-6 items-center bg-slate-100 py-8 px-[12rem] rounded-3xl max-[650px]:px-0">
                <div className=" text-black text-3xl mb-4 max-[430px]:text-xl">Still Have Questions?</div>
                <div className="text-slate-400 text-center">Contact @karanjoshi9809@gmail.com for further queries</div>
            </div>
        </div>
    );
}

export default FAQ;