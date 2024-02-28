import React from "react";

class UserClass2 extends React.Component{
    constructor(props){
        super(props)
        console.log("Child2: Constructor");
    }
    componentDidMount(){
        console.log("Child2: Component Mount");
    }
    render(){
        console.log("Child2: Render");
        return(
            <>
                <h1>User Class 2</h1>
                <h2>{this.props.name}</h2>
            </>
        )
    }
}

export default UserClass2;