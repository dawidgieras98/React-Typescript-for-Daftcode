import React, { useState } from "react";
import "./App.css";

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [petName, setPetName] = useState("");
  const [email, setEmail] = useState("");

  const HandleSubmit = (e: any) => {
    e.preventDefault();
    // if(e=0){}
  };

  return (
    <form className="Form" onSubmit={HandleSubmit}>
      <fieldset>
        <label htmlFor="name">First name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="surname">Name:</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={surName}
          onChange={(e) => setSurName(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="petname">Pet's name:</label>
        <input
          type="text"
          id="petname"
          name="petname"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </fieldset>
      <div className="button-box">
        <button type="submit">Add person to the tabel</button>
      </div>
    </form>
  );
};

export default ControlledInputs;
