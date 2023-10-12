import React, { useEffect } from "react"
import "./home.css";
import { NavBar } from "./Navbar";

function Home(prop) {

    let userName
    try {
        if (window.location.href.split("?")[1].split("=")[0] != "name") throw new Error("error")
        else if (userName = window.location.href.split("?")[1].split("=")[1] == "") throw new Error("error");
        else userName = window.location.href.split("?")[1].split("=")[1]

        console.log(userName);

    } catch (e) {
        alert("sign in first")
        window.location.href = "http://localhost:3000"
    }

    return (

        <>
            <NavBar />
            <div className="main-dashboard">

                <div className="home-container">
                    <header>
                        <h1>Welcome {userName}</h1>
                        <p onClick={() => {
                            window.location.href = "http://localhost:3000"
                        }} className="home-logout">Logout</p>
                    </header>

                </div>

            </div>
        </>

    )
}

export { Home }