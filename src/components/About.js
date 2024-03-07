import { Outlet } from "react-router-dom"

function About() {
    return (
        <>
            <div className="border-2 m-2 rounded-md p-8">
                <h1 className="font-bold text-xl">This is about us page of our project</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis exercitationem praesentium nisi eaque, eligendi vero nostrum eveniet voluptate earum, ad quibusdam tenetur.</p>
                <Outlet />
            </div>
        </>
    )
}

export default About