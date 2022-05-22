import React, { useState } from "react";
import "./App.css";

const ControlledInputs = () => {
  interface initialValueConfig {
    firstName: string;
    lastName: string;
    petName: string;
    email: string;
  }

  const [initialValue, setInitialValue] = useState<initialValueConfig>({
    firstName: "",
    lastName: "",
    petName: "",
    email: "",
  });
  const [formError, setFormError] = useState<string>("");
  const [errorAlert, setErrorAlert] = useState<boolean>(false);

  const checkIfReadyToSubmit = !(errorAlert || !initialValue);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  function handleOnChangeInput(e: any) {
    // if (initialValue.firstName.length < 3 || initialValue.firstName.length > 20) {
    //   if (initialValue.firstName.length > 20) {
    //     setFormError("A little bit too long");
    //   }
    //   if (initialValue.firstName.length < 3) {
    //     setFormError("A little bit too Short");
    //   }
    //   setErrorAlert(true);
    // } else {
    //   setErrorAlert(false);
    //   setFormError("");
    // }
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      {errorAlert && <div style={{ color: "red" }}>{formError}</div>}
      <fieldset>
        <label htmlFor="name">First name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={initialValue.firstName}
          onInput={handleOnChangeInput}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="surname">Name:</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={initialValue.lastName}
          onInput={handleOnChangeInput}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="petname">Pet's name:</label>
        <input
          type="text"
          id="petname"
          name="petname"
          value={initialValue.petName}
          onInput={handleOnChangeInput}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={initialValue.email}
          onInput={handleOnChangeInput}
        />
      </fieldset>
      <div className="button-box">
        <button type="submit" disabled={!checkIfReadyToSubmit}>
          Add person to the tabel
        </button>
      </div>
    </form>
  );
};

export default ControlledInputs;
