export const FAQCard = ({ isVisible, component, setIsVisible, info, que }) => {
    return (
        <div className="w-[80vw] rounded-xl overflow-hidden py-3 border-b-2 text-cyan-900 font-semibold max-w-5xl collapse-close bg-white" onClick={() => { isVisible ? setIsVisible("") : setIsVisible(component) }}>
            <div className="flex justify-between collapse-title text-2xl font-medium py-4">
                <p>{que}</p>
                <button>{isVisible ? "△" : "▽"}</button>

            </div>
            {
                isVisible ?
                    <div className="p-4 text-base text-slate-400">
                        {info}
                    </div> : null
            }
        </div>
    )
}