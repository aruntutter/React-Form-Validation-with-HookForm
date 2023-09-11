import React from "react";
import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  return (
    <div className="App">
      <h1 className="center-heading">
        Sign Up
        <br />
        <span>update your details</span>
      </h1>
      <RegistrationForm />
    </div>
  );
};

export default App;
