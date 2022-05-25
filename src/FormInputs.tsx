import React, { useState, useEffect } from "react";
import "./FormInputs.css";

interface InitialInputsConfig {
  firstName: string;
  secondName: string;
  petName: string;
  email: string;
}

function getFormInputValues() {
  const storedValues = localStorage.getItem("form");
  if (!storedValues) return { firstName: "", secondName: "", petName: "", email: "" };

  return JSON.parse(storedValues);
}

function FormInputs() {
  const [inputValues, setInputValues] = useState<InitialInputsConfig>(getFormInputValues);
  const [errorAlert, setErrorAlert] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(inputValues));
  }, [inputValues]);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("An error occured on the server. Please try again later.");
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValues((previousValues) => ({
      ...previousValues,
      [e.target.name]: e.target.value,
    }));

    const firstNameLength = inputValues.firstName.length;
    const secondNameLength = inputValues.secondName.length;
    const petNameLength = inputValues.petName.length;
    const emailLength = inputValues.email.length;

    if (firstNameLength < 3 || firstNameLength > 20) {
      if (firstNameLength < 3) {
        setErrorAlert("Your first name is too short");
      }
      if (firstNameLength > 20) {
        alert("Your first name is too long");
      }
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
          onChange={handleInputChange}
        />
      </fieldset>
      <p>{errorAlert}</p>
      <fieldset>
        <label htmlFor="secondName">Name:</label>
        <input
          type="text"
          id="secondName"
          name="secondName"
          value={inputValues.secondName}
          onChange={handleInputChange}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="petName">Pet's name:</label>
        <input
          type="text"
          id="petName"
          name="petName"
          value={inputValues.petName}
          onChange={handleInputChange}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={inputValues.email}
          onChange={handleInputChange}
        />
      </fieldset>
      <div className="button-box">
        <button type="submit">Add person to the tabel</button>
      </div>
    </form>
  );
}

export default FormInputs;

// import React,{useState, useEffect} from "react";

// interface IFormInputValues {
//   firstName: string;
//   secondName: string;
//   petName: string;
//   email: string;
// }

// function getFormValues() {
//   const storedValues = localStorage.getItem("form");
//   if (!storedValues)
//     return {
//       firstName: "",
//       secondName: "",
//       name: "",
//       telephone: "",
//     };
//   return JSON.parse(storedValues);
// }

// function App() {
//   const [values, setValues] = useState<IFormInputValues>(getFormValues);

//   useEffect(() => {
//     localStorage.setItem("form", JSON.stringify(values));
//   }, [values]);

//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     alert("An error occurred on the server. Please try again!!!");
//   }

//   function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
//     setValues((previousValues) => ({
//       ...previousValues,
//       [event.target.name]: event.target.value,
//     }));
//   }

//   return (
//     <main>
//       <header>
//         <h1>Caching Form Inputs In React</h1>
//         <h3>Building offline forms using local storage in react</h3>
//       </header>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="petName">
//           petName
//           <input
//             autoComplete="off"
//             type="text"
//             name="petName"
//             id="petName"
//             placeholder="Mr. Anyisob Baidoo"
//             onChange={handleChange}
//             value={values.petName}
//           />

//         </label>
//         <label htmlFor="firstName">
//           firstName
//           <input
//             placeholder="e.g. user.firstName@domain.com"
//             type="firstName"
//             name="firstName"
//             id="firstName"
//             onChange={handleChange}
//             value={values.firstName}
//           />
//         </label>
//         <label htmlFor="email">
//           Telephone
//           <input
//             type="text"
//             placeholder="e.g. +233(0)-392-498-2882"
//             name="email"
//             id="email"
//             onChange={handleChange}
//             value={values.email}
//           />
//         </label>
//         <label htmlFor="secondName">
//           secondName
//           <textarea
//             name="secondName"
//             id="secondName"
//             value={values.secondName}
//             onChange={handleChange}
//           ></textarea>
//           <small>Your contact message for us</small>
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </main>
//   );
// }

// export default App;
