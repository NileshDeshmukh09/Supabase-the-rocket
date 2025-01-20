import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Wrapper from "./pages/Wrapper";
import HorizontalPagesLayout from "./pages/HorizontalPagesLayout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* home */}
        <Route path="/" element={<Home />} />

        {/* register */}
        <Route path="/register" element={<Register />} />

        {/* login */}
        <Route path="/login" element={<Login />} />

        {/* dashboard */}
        <Route
          path="/dashboard"
          element={
            <Wrapper>
              <Dashboard />
            </Wrapper>
          }
        />

        <Route
          path="/page-layout"
          element={
            <Wrapper>
              <HorizontalPagesLayout />
            </Wrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
