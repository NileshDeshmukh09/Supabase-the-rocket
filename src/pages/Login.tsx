import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import supabase from "../helper/supabaseClient";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>(""); 
  const [password, setPassword] = useState<string>(""); 
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setMessage(error.message);
        setEmail("");
        setPassword("");
        return;
      }

      if (data) {
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Unexpected error during login:", err);
      setMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
        <button type="submit">Log in</button>
      </form>
      <span>Don't have an account?</span>
      <Link to="/register">Register.</Link>
    </div>
  );
};

export default Login;
