import React, { useState, useCallback, useEffect } from "react";
import "./App.css";

interface InitialInputsConfig {
  defaultValue?: string;
  firstName: string;
  secondName: string;
  petName: string;
  email: string;
}

const storageFormKey = "inputValue";

const Form = (props?: InitialInputsConfig) => {
  const [displayError, setDisplayError] = useState<boolean>(false);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [petName, setPetName] = useState("");
  const [email, setEmail] = useState("");
  const [errorNote, setErrorNote] = useState<string>("");

  const isFormReadyToSubmit = !displayError || !(firstName && secondName && petName && email);

  const initialInputs: InitialInputsConfig = {
    firstName: "",
    secondName: "",
    petName: "",
    email: "",
  };
  const checkFirstName = (e: any) => {
    setFirstName(e.target.value);

    if (initialInputs.firstName.length <= 3 || initialInputs.firstName.length > 20) {
      if (initialInputs.firstName.length <= 3) {
        setErrorNote("Your name is too short");
      }
      if (initialInputs.firstName.length > 20) {
        setErrorNote("Your name is too long");
      }

      setDisplayError(true);
    } else {
      setDisplayError(false);
      setErrorNote("");
    }
  };

  const checkSecondName = (e: any) => {
    setSecondName(e.target.value);

    if (initialInputs.secondName.length < 3 || initialInputs.secondName.length > 20) {
      if (initialInputs.secondName.length < 3) {
        setErrorNote("Your last name is too short");
      }
      if (initialInputs.secondName.length > 20) {
        setErrorNote("Your last name is too long");
      }

      setDisplayError(true);
    } else {
      setDisplayError(false);
      setErrorNote("");
    }
  };
  const checkPetName = (e: any) => {
    setPetName(e.target.value);

    if (initialInputs.petName.length < 1 || initialInputs.petName.length > 20) {
      if (initialInputs.petName.length < 1) {
        setErrorNote("Your pet's name is too short");
      }
      if (initialInputs.petName.length > 15) {
        setErrorNote("Your pet's name is too long");
      }

      setDisplayError(true);
    } else {
      setDisplayError(false);
      setErrorNote("");
    }
  };
  const checkEmail = (e: any) => {
    setEmail(e.target.value);

    if (initialInputs.email.length < 3 || initialInputs.email.length > 20) {
      if (initialInputs.email.length < 3) {
        console.log("za krotki");
      }
      if (initialInputs.email.length > 20) {
        console.log("za dlugi");
      }

      setDisplayError(true);
    } else {
      setDisplayError(false);
      setErrorNote("");
    }
  };

  const handleSubmit = useCallback(() => {
    if (isFormReadyToSubmit) {
      localStorage.setItem(storageFormKey, firstName);
    }
  }, [firstName, secondName, petName, email]);

  useEffect(() => {
    let valueToSet = "";
    const localStorageData = localStorage.getItem(storageFormKey);
    if (!!localStorageData) {
      valueToSet = localStorageData;
    } else {
      if (!!props?.defaultValue) {
        valueToSet = props?.defaultValue;
      }
    }

    setFirstName(valueToSet);
    setSecondName(valueToSet);
    setPetName(valueToSet);
    setEmail(valueToSet);
  }, []);
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="name">First name:</label>
        <input type="text" id="name" name="name" value={firstName} onInput={checkFirstName} />
      </fieldset>
      <fieldset>
        <label htmlFor="surname">Name:</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={secondName}
          onInput={checkSecondName}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="petname">Pet's name:</label>
        <input type="text" id="petname" name="petname" value={petName} onInput={checkPetName} />
      </fieldset>
      <fieldset>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" value={email} onInput={checkEmail} />
      </fieldset>
      <div className="button-box">
        <button type="submit" disabled={!isFormReadyToSubmit}>
          Add person to the tabel
        </button>
      </div>
    </form>
  );
};

export default Form;
