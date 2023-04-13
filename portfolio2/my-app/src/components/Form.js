import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label> Phone</label>
            <input type="text"></input>
            <label> Password</label>
            <input type="password"></input>
            <label>Resume Description</label>
           <textarea rows="6" placeholder="Type your message here"/>
           <button className="btn">Submit</button>
        </form>
      
    </div>
  )
}

export default Form
