import React from "react"
import UserClass1 from "./UserClass1";
import UserClass2 from "./UserClass2";
class ProfileClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            name: "Karan"
        }
        console.log("Parent : Constructor");
    }
    componentDidMount(){
        console.log("Parent : Component Mount");
    }
    componentDidUpdate(){
        console.log("Component did update");
    }
    render() {
        console.log("Parent : Render");
        return (
            <>
                <h1>Profile Class</h1>
                <h2>{this.state.name}</h2>
                <h2>{this.state.count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: 2
                    })
                }}>Set Count</button>
                {/* <UserClass1 name="Karan" />
                <UserClass2 name="Prince" /> */}
            </>
        )
    }
    // componentWillUnmount(
    //      // Clean Up Code
    //      console.log("Component Will Unmount");
    // )
}

/*
    Parent : Constructor
    Parent : Render
    Child1: Constructor
    Child1: Render
    Child2: Constructor
    Child2: Render
    Child1: Component Mount
    Child2: Component Mount
    Parent : Component Mount
*/

export default ProfileClass