import React from "react";
import { render } from "react-dom";
import Logo from "./Images/Logo.png";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import classes from "./Components/Screens/classes.js";
import students from "./Components/Screens/students.js";
import courses from "./Components/Screens/courses.js";

function App() {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Classes",
      path: "/classes",
    },
    {
      name: "Students",
      path: "/students",
    },
    {
      name: "Courses",
      path: "/courses",
    },
  ];

  return (
    <BrowserRouter>
      <div className="Main">
        <div className="left">
          <div className="menu">
            <div className="name">
              <img src={Logo} alt="logo" />
              <h1>Course App</h1>
            </div>
            <div className="links">
              {links.map((link) => (
                <Link to={link.path}>{link.name}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="right">
          <div className="header">
            <h1>Header</h1>
          </div>

          <div className="content">
            <Routes>
              <Route path="/" element={<h1>Welcome To Our Course App</h1>} />
              <Route path="/classes" element={<classes />} />
              <Route path="/students" element={<students />} />
              <Route path="/courses" element={<courses />} />
            </Routes>
          </div>

          <div className="footer">
            <h1>Footer</h1>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
