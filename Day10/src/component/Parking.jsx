import React, { useEffect } from 'react'
import "./parking.css"
import "./boot.css"
export default function Parking() {

    useEffect(() => {
        if (!window.localStorage.getItem("token")) {
            alert("login first")
            window.location.href = "http://localhost:3000"
        }
    }, [])

    return (
        <div className='parkingbody'>
            <header className="shadow">
                <div className="header-content d-flex justify-content-center p-2">
                    <h5 className="text-center">Add Details to Parking Lot</h5>
                </div>
            </header>
            <div className="form-container mt-5">
                <form className="w-50 mx-auto" id="entryForm">
                    <div className="form-group">
                        <label htmlFor="owner">Owner:</label>
                        <input
                            type="text"
                            className="form-control rounded-0 shadow-sm"
                            id="owner"
                            placeholder="Owner"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="car">Vehicle:</label>
                        <input
                            type="text"
                            className="form-control rounded-0 shadow-sm"
                            id="car"
                            placeholder="Vehicle"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="licensePlate">License Plate:</label>
                        <input
                            type="text"
                            className="form-control rounded-0 shadow-sm"
                            id="licensePlate"
                            placeholder="TN-75-AA-7096"
                        />
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="entryDate">Entry Date:</label>
                            <input
                                type="date"
                                className="form-control rounded-0 shadow-sm"
                                id="entryDate"
                            />
                        </div>
                        <div className="col-6">
                            <label htmlFor="exitDate">Exit Date:</label>
                            <input
                                type="date"
                                className="form-control rounded-0 shadow-sm"
                                id="exitDate"
                            />
                        </div>
                    </div>
                    <button
                        className="btn mx-auto d-block mt-5 rounded-0 shadow"
                        id="btnOne"
                        onClick={() => {
                            let inputs = document.querySelectorAll("input")
                            let owner = inputs[0].value
                            let vehicle = inputs[1].value
                            let numberplate = inputs[2].value
                            let entrydate = inputs[3].value
                            let exitdate = inputs[4].value

                            fetch("http://localhost/parking?token=" + window.localStorage.getItem("token"), {
                                method: "post",
                                body: JSON.stringify({ owner, vehicle, numberplate, entrydate, exitdate }),
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
                        Add Vehicle
                    </button>
                </form>
            </div>

        </div >

    )
}
