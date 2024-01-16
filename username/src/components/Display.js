
import React,{ useState } from 'react';


let user = []

export const DisplayInput = () => {
  // State variable to store user input
  const [userInput, setUserInput] = useState({});

  // Event handler to update the state when the user types
  const handleChange = (e) => {
    e.preventDefault()
   const {name,value} = e.target;
   setUserInput(values => ({...values,
    [name]: value,
}));

}
const handleSubmit = (e) =>{
    e.preventDefault();


    user.push(userInput.firstName)
localStorage.setItem('user',JSON.stringify(user))
  }
}




  return (
    <div>
      <label htmlFor="userInput">First Name:
      <input
        type="text"
        name="firstName"
        value={userInput.firstName}
        onChange={handleChange}
      />
      </label>

     <button type='submit' onClick={handleSubmit}>Submit</button>
      
      
     
      
    </div>
  );



