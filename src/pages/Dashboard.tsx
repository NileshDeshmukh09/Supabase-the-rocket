import React from "react";
import supabase from "../helper/supabaseClient";
import { useNavigate } from "react-router-dom";


const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      <h1>Hello, you are logged in.</h1>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};

export default Dashboard;
