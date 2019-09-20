import React, { useState } from "react";


export default function SearchForm(props) {
  const [newChar, setNewChar] = useState({})

  const handleChange = event => {
      setNewChar({...newChar,[event.target.name]:event.target.value})
  }
  console.log(props)

  const handleSubmit = event => {
      event.preventDefault();
      const addChar = props.addNewCharProps;
      addChar(newChar);
  }
 
  return (
    <section className="search-form">
      
     <form onSubmit = {handleSubmit}>
            <label>
                Name:
                <input type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}/>            
            </label>
            <label>
                Status:
                <input type="text"
                placeholder="Status"
                name="status"
                onChange={handleChange}/>
            </label>
            <label>
                Species:
                <input type="text"
                placeholder="Species"
                name="species"
                onChange={handleChange}/>
            </label>
            <label>
                Gender:
                <input type="text"
                placeholder="Gender"
                name="gender"
                onChange={handleChange} />
            </label>
            
            <button type="submit">Submit</button>
        </form>
    </section>
  );
}
