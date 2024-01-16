import React from "react";
import {Link} from 'react-router-dom'


export const UserName = () =>{
    return(
        <div>
            <h1>User Name</h1>
            <button><Link to="/">Home</Link></button><br></br><br></br>
            <button><Link to="/Book">Book</Link></button>
        </div>
    )
}