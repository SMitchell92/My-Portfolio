import React from "react";
import { useState } from "react";


export default function Contact() {

  const [inputName, setInputName] = useState("");
  const [emailName, setEmailName] = useState("");
  const [Message, setMessage] = useState("");


  return (
    <div id="nav-page-container">
      <h1>Contact Page</h1>

      <form>

        <div>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name" required
            value={inputName}
            onChange={(event) => {
              setInputName(event.target.value)
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
          <label for="email">Email</label>
          <input 
          type="text" 
          id="email" 
          name="email" required
          value={emailName}
            onChange={(event) => {
              setEmailName(event.target.value)
              console.log(emailName)
              if(emailName != "") {
                document.getElementById("invalidEmail-warning").classList.remove("hidden")
              } else {
                document.getElementById("invalidEmail-warning").classList.add("hidden")
              }
            }}
            onBlur={() => {
              if(emailName == "") {
                document.getElementById("emailName-warning").classList.remove("hidden")
              } else {
                document.getElementById("emailName-warning").classList.add("hidden")
              }
            }}
          >

          </input>
          <p id="invalidEmail-warning" class="hidden">Email address invalid!</p>
          <p id="emailName-warning" class="hidden">Email address required!</p>
        </div>

        <div>
          <label for="message">Message</label>
          <textarea id="message" 
          name="message" required
          value={Message}
            onChange={(event) => {
              setMessage(event.target.value)
              console.log(Message)
            }}
            onBlur={() => {
              if(Message == "") {
                document.getElementById("Message-warning").classList.remove("hidden")
              } else {
                document.getElementById("Message-warning").classList.add("hidden")
              }
            }}>
          </textarea>
          <p id="Message-warning" class="hidden">Message required!</p>
        </div>

        <button type="submit">Submit</button>


      </form>

    </div>
  );
}
