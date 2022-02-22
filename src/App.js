import React from "react";
import { render } from "react-dom";
import Logo from "./Images/Logo.png";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Classes from "./Components/Screens/Classes.js";
import Students from "./Components/Screens/Stundets.js";
import Courses from "./Components/Screens/Courses.js";
function App() {
  let navigate = useNavigate();
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Classes",
      path: "/Classes",
    },
    {
      name: "Students",
      path: "/Students",
    },
    {
      name: "Courses",
      path: "/Courses",
    },
  ];

  return (
    <div className="Main">
      <div className="left">
        <div className="menu">
          <div className="name">
            <img src={Logo} alt="logo" />
            <h1>Course App</h1>
          </div>
          <div className="links">
            {links.map((link) => (
              <a onClick={() => navigate(`${link.path}`)}>{link.name}</a>
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
            <Route path="/Classes" element={<Classes />} />
            <Route path="/Students" element={<Students />} />
            <Route path="/Courses" element={<Courses />} />
          </Routes>
        </div>

        <div className="footer">
          <h1>Footer</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
