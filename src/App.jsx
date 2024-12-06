import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomeContent from "./components/HomeContent";
import Dashboard from "./components/Dashboard";
import "./App.css";

const App = () => {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<HomeContent />} />
                    <Route path="/dashboard/:fileName" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
