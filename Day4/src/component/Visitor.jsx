import React from 'react'
import "./visitor.css"

export default function Visitor() {
    return (
        <>
            <header className="shadow">
                <div className="header-content d-flex justify-content-center p-2">
                    <h5 className="text-center">Visitor</h5>
                    <div id="header-msg" className="ml-5 align-self-center">
                        Parking Lot
                    </div>
                </div>
            </header>
            <div className="form-container mt-5">
                <form className="w-50 mx-auto" id="entryForm">
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
                            id="car"
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="licensePlate">Vsiting Date:</label>
                        <input
                            type="date"
                            className="form-control rounded-0 shadow-sm"
                            id="licensePlate"
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
                    >
                        Book slot
                    </button>
                </form>
            </div>

        </>

    )
}
