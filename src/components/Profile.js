import { useEffect } from "react";

function Profile() {
    useEffect(() => {
        const timer = setInterval(() => {
            // console.log("SetInterval Called");
        }, 1000);
        return () => clearInterval(timer);
    }, [])
    return ( 
        <div className="profile">
            <h1>Profile Page</h1>
        </div>
    );
}

export default Profile;