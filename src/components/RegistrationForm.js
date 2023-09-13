// RegistrationForm.js

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "./RegistrationForm.css";

// Submission Successful
const Card = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Submission successful✅</h5>
        <p className="card-text">
          Thank you!
          <br />
          Your Details are Submitted!
        </p>
      </div>
    </div>
  );
};

// Registration form
const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    getValues,
  } = useForm();

  const [showCard, setShowCard] = useState(false);

  const onSubmit = (data) => {
    setShowCard(true);
    // alert("Registration successful!");
  };

  return (
    <div className="form-container">
      {!showCard && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Username</label>
            <Controller
              name="username"
              control={control}
              rules={{
                required: "Username is required",
                minLength: {
                  value: 4,
                  message: "Username should have at least 4 characters",
                },
              }}
              render={({ field }) => <input {...field} />}
            />
            {errors.username && (
              <p className="error-message">{errors.username.message}</p>
            )}
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please enter a valid phone number",
                },
              }}
              render={({ field }) => <input {...field} />}
            />
            {errors.phone && (
              <p className="error-message">{errors.phone.message}</p>
            )}
          </div>

          <div className="form-group">
            <label>Email</label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Please enter a valid email address",
                },
              }}
              render={({ field }) => <input {...field} />}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          <div className="form-group">
            <label>Password</label>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password should have at least 6 characters",
                },
              }}
              render={({ field }) => <input type="password" {...field} />}
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Confirm Password is required",
                validate: (value) =>
                  value === getValues("password") || "Password must be matched",
              }}
              render={({ field }) => <input type="password" {...field} />}
            />
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword.message}</p>
            )}
          </div>
          <button type="submit" disabled={!isDirty}>
            Sign Up
          </button>
        </form>
      )}

      {showCard && <Card />}
    </div>
  );
};

export default RegistrationForm;
