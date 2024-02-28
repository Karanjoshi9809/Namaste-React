import React from "react";

class UserClass1 extends React.Component{
    constructor(props){
        super(props)
        console.log("Child1: Constructor");
    }
    componentDidMount(){
        console.log("Child1: Component Mount");
    }
    render(){
        console.log("Child1: Render");
        return(
            <>
                <h1>User Class 1</h1>
                <h2>{this.props.name}</h2>
            </>
        )
    }
}

export default UserClass1;