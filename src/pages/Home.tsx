import React from "react";
import { Link } from "react-router-dom";
import StatsSection from "../components/StatsSection";
import SortableList from "../components/SortableList";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 px-6">
      {/* Navigation Bar */}
      <nav className="mb-8 flex space-x-6">
        <Link
          to="/register"
          className="text-lg font-medium text-blue-600 hover:text-blue-800 transition duration-300 transform hover:scale-105"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="text-lg font-medium text-blue-600 hover:text-blue-800 transition duration-300 transform hover:scale-105"
        >
          Login
        </Link>
      </nav>

      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-700 tracking-tight mb-4">
          Unlock Platform Insights 🚀
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Drag and drop the cards below to explore insights, stats, and
          performance trends about our platform. Make the data your own!
        </p>
      </header>

      {/* Main Section */}
      <main className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-6">
        {/* Sortable List */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Sortable Stats Section
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Reorder the cards horizontally by dragging them to arrange your
          insights!
        </p>
        <SortableList />
      </main>
    </div>
  );
};

export default Home;
