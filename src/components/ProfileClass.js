import React from "react"
import UserClass1 from "./UserClass1";
import UserClass2 from "./UserClass2";
import SocialProfileClass from "./SocialProfileClass";

// class ProfileClass extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 1,
//             name: "Karan"
//         }
//         console.log("Parent : Constructor");
//     }
//     componentDidMount(){
//         console.log("Parent : Component Mount");
//     }
//     componentDidUpdate(){
//         console.log("Component did update");
//     }
//     render() {
//         console.log("Parent : Render");
//         return (
//             <>
//                 <h1>Profile Class</h1>
//                 <h2>{this.state.name}</h2>
//                 <h2>{this.state.count}</h2>
//                 <button onClick={() => {
//                     this.setState({
//                         count: 2
//                     })
//                 }}>Set Count</button>
//                 {/* <UserClass1 name="Karan" />
//                 <UserClass2 name="Prince" /> */}
//             </>
//         )
//     }
//     // componentWillUnmount(
//     //      // Clean Up Code
//     //      console.log("Component Will Unmount");
//     // )
// }

// /*
//     Parent : Constructor
//     Parent : Render
//     Child1: Constructor
//     Child1: Render
//     Child2: Constructor
//     Child2: Render
//     Child1: Component Mount
//     Child2: Component Mount
//     Parent : Component Mount
// */

class ProfileClass extends React.Component {
    constructor(props) {
        super(props)
        // this.state;
    }

    async componentDidMount() {
        // console.log("Profile-Parent componentDidMount");
    }

    componentDidUpdate() {
        // console.log("Profile-Parent componentDidUpdate");
    }

    componentWillUnmount() {
        // console.log("Profile-Parent componentWillUnmount");
    }
    render() {
        return (

            <div className="flex flex-col justify-center items-center flex-wrap rounded-lg shadow-xl w-[40vw] p-10">
                <h1 className="text-2xl font-bold">About Me</h1>
                <div className="overflow-hidden self-center">
                    <a href="https://github.com/Karanjoshi9809" className="my-6 flex items-center justify-center" target="_blank" rel="noopener noreferrer">
                        <img
                            className="rounded-full h-40 w-40 shadow-md"
                            src="https://avatars.githubusercontent.com/u/122138263?v=4"
                            alt="Karanjoshi9809"
                            title="github.com/Karanjoshi9809"
                        />
                    </a>
                    {console.log("Hi")}
                    <p className="font-semibold mb-2">MERN Stack | JavaScript | DSA | Web Developer</p>
                    <SocialProfileClass />
                </div>
            </div>
        )
    }
}

export default ProfileClass