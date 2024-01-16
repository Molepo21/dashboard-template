import React from 'react'

import {Link} from 'react-router-dom'

export const Navbar = () =>{
    return(
        <div>
          <button><Link to="/">Home</Link></button><br></br>
          
          <button><Link to="/Book">Book</Link></button><br></br>
          <button><Link to="/Dashboard">Dashboard</Link></button><br></br>
          <button><Link to="/AddName">AddName</Link></button><br></br>
          <button><Link to="/AddBook">AddBook</Link></button><br></br>
          <button><Link to="/UserName">Username</Link></button>
          
        </div>
    )
}
