
import React, { useEffect } from "react"
import "./login.css"
import { Link } from "react-router-dom"



function Login() {

    return (
        <>
            <div className="containerr">
                <input type="checkbox" id="check" />
                <div className="login form">
                    <header>Login</header>
                    <form action="">
                        <input type="text" id="user" placeholder="Enter your user name" />
                        <input type="password" placeholder="Enter your password" />

                        <input onClick={() => {
                            let uname = document.querySelector("#user").value
                            window.location.href = "http://localhost:3000/home?name=" + uname;
                        }} type="button" className="button" defaultValue="Login" />

                    </form>
                    <div className="signup">
                        <span className="signup">
                            Don't have an account?
                            <label htmlFor="check">Signup</label>
                        </span>
                    </div>
                </div>
                <div className="registration form">
                    <header>Signup</header>
                    <form action="">
                        <input type="text" id="name" placeholder="Enter your user name" />
                        <input type="text" id="email" placeholder="Enter your email" />
                        <input type="text" id="number" placeholder="Enter your number" />
                        <input type="password" placeholder="Create a password" />
                        <input type="password" placeholder="Confirm your password" />
                        <input onClick={() => {
                            localStorage.setItem("name", document.querySelector("#name").value)
                            localStorage.setItem("email", document.querySelector("#email").value)
                            localStorage.setItem("number", document.querySelector("#number").value)
                            window.location.href="http://localhost:3000"
                            
                        }} type="button" className="button" defaultValue="Signup" />
                    </form>
                    <div className="signup">
                        <span className="signup">
                            Already have an account?
                            <label htmlFor="check">Login</label>
                        </span>
                    </div>
                </div>
            </div>

        </>

    )
}

export { Login }
