import React from 'react'
import "./password.css"
export default function Password() {

    return (
        <div id='passwd'>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
            />
            <div className="img3"></div>
            <div className="form-gap" />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="text-center">
                                    <h3>
                                        <i className="fa fa-lock fa-4x" />
                                    </h3>
                                    <h2 className="text-center">Forgot Password?</h2>
                                    <p>You can reset your password here.</p>
                                    <div className="panel-body">
                                        <div
                                        // id="register-form"
                                        // role="form"
                                        // autoComplete="off"
                                        // className="form"
                                        // method="post"
                                        >
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="glyphicon glyphicon-envelope color-blue" />
                                                    </span>
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        placeholder="Enter your user name"
                                                        className="form-control"
                                                        type="email"
                                                    />
                                                </div>
                                                <br />

                                                <div>
                                                    <input
                                                        id="pwd"
                                                        name="email"
                                                        placeholder="Enter your new Password"
                                                        className="form-control"

                                                    />

                                                </div>
                                                <br />
                                                <div>
                                                    <input
                                                        id="pwd"
                                                        name="email"
                                                        placeholder="Re-Type your new Password"
                                                        className="form-control"

                                                    />


                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    name="recover-submit"
                                                    className="btn btn-lg btn-primary btn-block"
                                                    defaultValue="Reset Password" onClick={() => {
                                                        fetch("http://localhost/forgotpwd", {
                                                            method: "put",
                                                            body: JSON.stringify({
                                                                name: document.querySelector("#email").value,
                                                                password: document.querySelector("#pwd").value,
                                                            }),
                                                            headers: {
                                                                "content-type": "application/json"
                                                            }
                                                        })
                                                            .then(ev => ev.text())
                                                            .then(ev => {
                                                                if (ev == "true") {
                                                                    window.location.href = "http://localhost:3000";
                                                                } else {
                                                                    alert("some error occured")
                                                                }
                                                            })

                                                    }}
                                                    type="submit"


                                                />
                                            </div>
                                            <input
                                                type="hidden"
                                                className="hide"
                                                name="token"
                                                id="token"
                                                defaultValue=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}