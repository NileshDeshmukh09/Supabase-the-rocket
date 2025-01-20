import React, { useEffect, useState, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import supabase from "../helper/supabaseClient";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setAuthenticated(!!session);
      setLoading(false);
    };

    getSession();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (authenticated) {
    return <>{children}</>;
  }

  return <Navigate to="/login" />;
};

export default Wrapper;
