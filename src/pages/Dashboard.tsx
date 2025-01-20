import React, { useEffect, useState } from "react";
import supabase from "../helper/supabaseClient";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null); // State to store user data

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user);
    };

    fetchUser();
  }, []);

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const horizontalDrag = () => {
    navigate("/page-layout");
  };

  return (
    <div>
      <h1>Hello, you are logged in.</h1>
      <h4>{user && <p style={{ }}>Welcome, {user.email}</p>}</h4> 
      <button onClick={signOut}>Sign out</button>
      <button onClick={horizontalDrag}> Horizontal Page Layout </button>
    </div>
  );
};

export default Dashboard;
