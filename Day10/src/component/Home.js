import React, { useEffect, useState } from "react";
import "./home.css";
import Footer from "./footer";
// import { NavBar } from "./Navbar";


function Home(prop) {
  let userName = ""

  // State to handle the dropdown visibility
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {

    if (!window.localStorage.getItem("token")) {
      window.location.href = "http://localhost:3000"
    }
  })

  return (
    <div id="home">

      <main>
        <div className="menu">
          <div className="logo">
            <a href="#">SMART CAMPUS</a>
          </div>
          <ul>
            <li>
              <a onClick={() => {
                window.location.href = "http://localhost:3000/Profile";
              }}>Profile</a>
            </li>
            <li>
              <a onClick={() => {
                window.location.href = "http://localhost:3000/aboutus";
              }}>About</a>
            </li>
            <li className="services-dropdown" onClick={toggleDropdown}>
              {/* Toggle the dropdown when clicking "Services" */}
              <a>Services</a>
              {/* Dropdown content */}
              {isDropdownVisible && (
                <ul className="dropdown">
                  <li>
                    <a href="http://localhost:3000/parking">Parking System</a>
                  </li>
                  <li>
                    <a href="http://localhost:3000/event">Events</a>
                  </li>
                  <li>
                    <a href="http://localhost:3000/visitor">Visiting</a>
                  </li>
                  <li>
                    <a onClick={() => {
                      fetch("http://localhost/profile?token="+window.localStorage.getItem("token"))
                        .then(ev=>ev.text())
                        .then(ev=>{
                          let role=ev.split(",")[5]
                          if(role=="Admin"){
                            window.location.href="http://localhost:3000/dashboard"
                          }
                          else{
                            alert("Only Admins are allowed ")
                          }
                        })
                      // window.location.href = "http://localhost:3000/dashboard"
                    }}>Analysis</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a onClick={() => {
                window.location.href = "http://localhost:3000/contactus";
              }}>Contact</a>
            </li>
            <li>
              <a onClick={() => {
                window.localStorage.removeItem("token")
                window.location.href = "http://localhost:3000";
              }}>Logout</a>
            </li>
          </ul>
        </div>
      </main>
      <div className="img" />
      <div className="center">
        <div className="title">Welcome {window.localStorage.getItem("user")}</div>
      </div>
      <div id="footer">
        <Footer />

      </div>
    </div>
  );
}

export { Home };
