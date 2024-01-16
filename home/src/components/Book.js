import React from "react";
import {Link} from 'react-router-dom'


export const Book = () =>{
  return(
<div>
<h1>Books</h1>

<button><Link to="/">Home</Link></button><br></br><br></br>
        <button><Link to="/Dashboard">Dashboard</Link></button><br></br>

</div>
  

    
  ) 
}
  