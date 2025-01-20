import React, { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../helper/supabaseClient";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setMessage(error.message);
        return;
      }

      if (data) {
        setMessage("User account created!");
      }

      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Unexpected error during registration:", err);
      setMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <br />
      {message && <span>{message}</span>}
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Create Account</button>
      </form>
      <span>Already have an account?</span>
      <Link to="/login">Log in.</Link>
    </div>
  );
};

export default Register;
