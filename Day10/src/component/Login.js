
import React, { useEffect } from "react"
import "./login.css"
import { Link } from "react-router-dom"

function Login() {

    return (
        <>
            <div className="imgg"></div>
            <div className="containerr">
                <input type="checkbox" id="check" />
                <div className="login form">
                    <header>Login</header>
                    <form action="">
                        <input type="text" id="user" placeholder="Enter your user name" />
                        <input type="password" id="password" placeholder="Enter your password" />

                        <input onClick={() => {
                            let name = document.querySelector("#user").value
                            let password = document.querySelector("#password").value
                            fetch("http://localhost/login", {
                                method: "post", body: JSON.stringify({ name, password }), headers: {
                                    "content-type": "application/json"
                                }
                            })
                                .then(ev => ev.text())
                                .then(ev => {
                                    if (ev != "0") {
                                        window.localStorage.setItem("token", ev)
                                        window.localStorage.setItem("user", name)
                                        window.location.href = "http://localhost:3000/home";
                                    } else alert("invalid username and password")
                                })
                        }} type="button" className="button" defaultValue="Login" />

                    </form>
                    <div onClick={() => {
                        window.location.href = "http://localhost:3000/password";
                    }} className="forgot"><label htmlFor="check">forgot password?</label>
                    </div>
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
                        <input type="password" id="pwd" placeholder="Create a password" />
                        <input type="password" placeholder="Confirm your password" />

                        <div className="radio">
                            <div>
                                <input type="radio" id="huey" name="drone" value="Admin" />
                                <label for="huey">Admin</label>
                            </div>
                            <div>
                                <input type="radio" id="louie" name="drone" value="Visitor" checked />
                                <label for="louie">Visitor</label>
                            </div>
                        </div>
                        
                        <input onClick={() => {
                            // localStorage.setItem("name", document.querySelector("#name").value)
                            // localStorage.setItem("email", document.querySelector("#email").value)
                            // localStorage.setItem("number", document.querySelector("#number").value)
                            let role = document.querySelectorAll("input:checked")[1]
                            // console.log(role.value)
                            fetch("http://localhost/signup", {
                                method: "post",
                                body: JSON.stringify({
                                    name: document.querySelector("#name").value,
                                    email: document.querySelector("#email").value,
                                    mobile: document.querySelector("#number").value,
                                    password: document.querySelector("#pwd").value,
                                    role: role.value
                                }), headers: {
                                    "content-type": "application/json"
                                }
                            })
                                .then(ev => ev.text())
                                .then(ev => {
                                    // if (ev == "true") {
                                    window.location.href = "http://localhost:3000/";
                                    // } else alert("some error occured")
                                })



                            window.location.href = "http://localhost:3000"

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
