import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home/:userId" element={<Home />} /> {/* ✅ Dynamiczny route */}
            </Routes>
        </Router>
    );
}

export default App;
