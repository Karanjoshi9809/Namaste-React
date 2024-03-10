import { useState } from "react"

const Section = ({ title, description, isVisible, component, setIsVisible }) => {
    return (
        <div className="border-2 rounded-md p-4 my-2">
            <h1 className="font-bold text-lg">{title}</h1>
            {isVisible ?
                <>
                    <p>{description}</p>
                    <button
                        className="border-2 p-1 mx-2 rounded-md"
                        onClick={() => setIsVisible("")}
                    >
                        hide
                    </button>
                </>
                :
                <button
                    className="border-2 p-1 mx-2 rounded-md"
                    onClick={() => setIsVisible(component)}
                >
                    show
                </button>
            }


        </div>
    )
}

function Instamart() {
    const [visibleSection, setVisibleSection] = useState("about")
    return (
        <div id="instamart" className="border-2 m-2 rounded-md p-8">
            <h1 className="font-bold text-xl">Instamart Page</h1>
            <Section
                title='About instamart'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex saepe, facilis delectus odio perferendis quas reprehenderit praesentium voluptatem velit voluptates. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ea atque itaque. Ex eius molestiae voluptas, consequatur quaerat eum explicabo.'
                isVisible={visibleSection === "about"}
                component="about" 
                setIsVisible={setVisibleSection}
            />
            <Section
                title='Team instamart'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex saepe, facilis delectus odio perferendis quas reprehenderit praesentium voluptatem velit voluptates. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ea atque itaque. Ex eius molestiae voluptas, consequatur quaerat eum explicabo.'
                isVisible={visibleSection === "team"}
                component="team"
                setIsVisible={setVisibleSection}
            />
            <Section
                title='Careers instamart'
                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex saepe, facilis delectus odio perferendis quas reprehenderit praesentium voluptatem velit voluptates. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ea atque itaque. Ex eius molestiae voluptas, consequatur quaerat eum explicabo.'
                isVisible={visibleSection === "career"}
                component="career"
                setIsVisible={setVisibleSection}
            />
        </div>
    )
}

export default Instamart