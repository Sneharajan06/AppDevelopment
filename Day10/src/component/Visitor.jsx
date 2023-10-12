import React, { useEffect } from 'react'
import "./visitor.css"

export default function Visitor() {

    useEffect(() => {
        if (!window.localStorage.getItem("token")) {
            alert("login first")
            window.location.href = "http://localhost:3000"
        }
    }, [])

    return (
        <div className='visitorbody'>
            <header className="shadow">
                <div className="header-content d-flex justify-content-center p-2">
                    <h5 className="text-center">Visitor</h5>
                </div>
            </header>
            <div className="form-container mt-3">
                <div className="w-50 mx-auto" id="entryForm">
                    <div className="form-group">
                        <label htmlFor="owner">Student Name:</label>
                        <input
                            type="text"
                            className="form-control rounded-0 shadow-sm"
                            id="owner"
                            placeholder="Student Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="car">Visitors Name:</label>
                        <input
                            type="text"
                            className="form-control rounded-0 shadow-sm"
                            id="car"
                            placeholder="Parent Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="car">Phone Number:</label>
                        <input
                            type="text"
                            className="form-control rounded-0 shadow-sm"
                            id="phone"
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="licensePlate">Vsiting Date:</label>
                        <input
                            type="date"
                            className="form-control rounded-0 shadow-sm"
                            id="date"
                            placeholder="DD-MM-YYYY"
                        />
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="entryDate">Entry Time:</label>
                            <input
                                type="time"
                                className="form-control rounded-0 shadow-sm"
                                id="entrytime"
                            />
                        </div>
                        <div className="col-6">
                            <label htmlFor="exitDate">Exit Time:</label>
                            <input
                                type="time"
                                className="form-control rounded-0 shadow-sm"
                                id="exittime"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn mx-auto d-block mt-5 rounded-0 shadow"
                        id="btnOne"
                        onClick={() => {
                            let obj = {
                                "visitingdate": document.querySelector("#date").value,
                                "visitorname": document.querySelector("#car").value,
                                "visitorentry": document.querySelector("#entrytime").value,
                                "visitorexit": document.querySelector("#exittime").value,
                                "visitoralias": document.querySelector("#owner").value,
                                "visitornumber": document.querySelector("#phone").value,
                            }

                            fetch("http://localhost/visitor?token=" + window.localStorage.getItem("token"), {
                                method: "post",
                                body: JSON.stringify(obj),
                                headers: {
                                    "content-type": "application/json"
                                }
                            }).then(ev => ev.text())
                                .then(ev => {
                                    if (ev == "0") {
                                        alert("some error occured")
                                        window.location.href = "http://localhost:3000"
                                    }
                                    else {
                                        alert(ev)
                                        window.location.href = "http://localhost:3000/home"
                                    }
                                })
                        }}
                    >
                        Book slot
                    </button>
                </div>
            </div>

        </div>

    )
}
