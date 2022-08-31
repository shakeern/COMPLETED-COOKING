import React, { useState } from 'react';
import '../App.css';
import {useNavigate } from 'react-router-dom';

function Landing() {
  const [recipe, setRecipe] = useState("");
    const navigate = useNavigate();

    const submitForm = (event) => {
      event.preventDefault();
      navigate('/recipe/' + recipe);

    }
  return (

    
    
    <div class = "landing-body">
      <div class = "centered">

        <h1>The Cutting Board</h1>
        <form>
          <input onChange = {(event) => setRecipe(event.target.value)}class = "search-input" type='search' placeholder='Find a Recipe'></input>
          <button class = "submit-btn" type="submit" onClick={submitForm}>Search</button>
        </form>
      </div>




    </div>
  )
}

export default Landing
