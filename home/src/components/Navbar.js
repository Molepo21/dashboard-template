import React from 'react'

import {Link} from 'react-router-dom'

export const Navbar = () =>{
    return(
        <div>
          <Link to="/">Home</Link><br></br>
          <Link to="/Book">Book</Link><br></br>
          <Link to="/Dashboard">Dashboard</Link><br></br>
          <Link to="/AddName">AddName</Link><br></br>
          <Link to="/AddBook">AddBook</Link>
        </div>
    )
}
