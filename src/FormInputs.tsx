import React, { useState, useEffect } from "react";
import "./FormInputs.scss";

interface InitialInputsConfig {
  firstName: string;
  secondName: string;
  petName: string;
}

function getFormInputValues() {
  const storedValues = localStorage.getItem("form");
  if (!storedValues) return { firstName: "", secondName: "", petName: "" };

  return JSON.parse(storedValues);
}

function FormInputs() {
  const [inputValues, setInputValues] = useState<InitialInputsConfig>(getFormInputValues);
  const [errorAlertFirst, setErrorAlertFirst] = useState<string>("");
  const [errorAlertSecond, setErrorAlertSecond] = useState<string>("");
  const [errorAlertPet, setErrorAlertPet] = useState<string>("");
  const [displayError, setDisplayError] = useState<boolean>(false);
  const [displayErrorSecond, setDisplayErrorSecond] = useState<boolean>(false);
  const [displayErrorPet, setDisplayErrorPet] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(inputValues));
  }, [inputValues]);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("An error occured on the server. Please try again later.");
  }

  function HandleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValues((previousValues) => ({
      ...previousValues,
      [e.target.name]: e.target.value,
    }));
  }

  const firstNameLength = inputValues.firstName.length;
  const secondNameLength = inputValues.secondName.length;
  const petNameLength = inputValues.petName.length;

  // FIRST NAME
  function firstNameCheck() {
    if (firstNameLength < 3 || firstNameLength > 20) {
      if (firstNameLength < 3) {
        setErrorAlertFirst("Your name is too short");
      }
      if (firstNameLength > 20) {
        setErrorAlertFirst("Your name is too long");
      }

      setDisplayError(true);
    } else {
      setDisplayError(false);
      setErrorAlertFirst("");
    }
  }
  // SECOND NAME
  function secondNameCheck() {
    if (secondNameLength < 4 || secondNameLength > 10) {
      if (secondNameLength < 4) {
        setErrorAlertSecond("Your name is too short");
      }
      if (secondNameLength > 10) {
        setErrorAlertSecond("Your name is too long");
      }
      setDisplayErrorSecond(true);
    } else {
      setDisplayErrorSecond(false);
      setErrorAlertSecond("");
    }
  }
  // PET NAME
  function petNameCheck() {
    if (petNameLength <= 4 || petNameLength >= 10) {
      if (petNameLength <= 4) {
        setErrorAlertPet("Your pets name is too short");
      }
      if (petNameLength >= 10) {
        setErrorAlertPet("Your pets name is too long");
      }
      setDisplayErrorPet(true);
    } else {
      setDisplayErrorPet(false);
      setErrorAlertPet("");
    }
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={inputValues.firstName}
          onChange={HandleInputChange}
          onInput={firstNameCheck}
        />
      </fieldset>
      {displayError && <p style={{ color: "red" }}>{errorAlertFirst}</p>}
      <fieldset>
        <label htmlFor="secondName">Name:</label>
        <input
          type="text"
          id="secondName"
          name="secondName"
          value={inputValues.secondName}
          onChange={HandleInputChange}
          onInput={secondNameCheck}
        />
      </fieldset>
      {displayErrorSecond && <p style={{ color: "red" }}>{errorAlertSecond}</p>}
      <fieldset>
        <label htmlFor="petName">Pet's name:</label>
        <input
          type="text"
          id="petName"
          name="petName"
          value={inputValues.petName}
          onChange={HandleInputChange}
          onInput={petNameCheck}
        />
      </fieldset>
      {displayErrorPet && <p style={{ color: "red" }}>{errorAlertPet}</p>}
      <div className="button-box">
        <button type="submit">Add person to the tabel</button>
      </div>
    </form>
  );
}

export default FormInputs;
