import { Outlet, Link } from "react-router-dom"
import burgerImage from "../assets/burgerImage.png"
import { useState } from "react"   

function About() {
    const [show, setShow] = useState(false);
    return (
        <div className="">
            <div className="flex flex-col justify-center items-center mt-6">
                {/* used ternary condition to Show my profile and Hide my Profile and using nested routing */}
                {show ? (
                    <>
                        <Link to="/about">
                            <button
                                className="rounded-md bg-amber-500 text-white p-2 text-lg hover:bg-amber-600"
                                onClick={() => setShow(false)}
                            >
                                Hide My Profile
                            </button>
                        </Link>
                        <Outlet />
                    </>
                ) : (
                    <Link to="profile">
                        <button
                            className="rounded-md bg-amber-500 text-lg text-white p-2 hover:bg-amber-600"
                            onClick={() => setShow(true)}
                        >
                            Show My Profile
                        </button>
                    </Link>
                )}
            </div>
            <div className="flex w-full h-[56vh] mt-12 justify-around items-center max-[930px]:flex-col ">
                <div className="flex flex-col justify-left items-left max-[930px]:items-center">
                    <h1 className="text-6xl font-bold text-gray-700 max-[650px]:text-base">
                        <p className="mb-4">Welcome to <br /> The world of <br /></p>
                        <span className="bg-amber-500 px-2 rounded-md text-gray-200">Tasty & Fresh Food</span>
                    </h1>
                    <h4 className="text-2xl font-bold text-gray-700 mt-6 font-sans max-[650px]:text-base">
                        "Better you will feel if you eat a Flavor<span className="text-amber-500">Fusion's</span> healthy
                        meal"
                    </h4>
                </div>
                <div className="">
                    <img src={burgerImage} alt="Food Image" />
                </div>
            </div>
        </div>
    );
}

export default About