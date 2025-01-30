import React from "react";
import { useState } from "react";


export default function Contact() {

  const [inputName, setInputName] = useState("");

  return (
    <div>
      <h1>Contact Page</h1>

      <form>

        <div>
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={inputName}
            onChange={(event) => {
              setInputName(event.target.value)
              console.log(inputName)
            }}
            onBlur={() => {
              if(inputName == "") {
                document.getElementById("inputName-warning").classList.remove("hidden")
              } else {
                document.getElementById("inputName-warning").classList.add("hidden")
              }
            }}
            >  
          </input>


          <p id="inputName-warning" class="hidden">Name is required!</p>
        </div>

        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required></input>
        </div>

        <div>
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit">Submit</button>


      </form>

    </div>
  );
}
