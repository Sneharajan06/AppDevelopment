import React, { useEffect, useState } from 'react'
import "./Admin.css"

export default function Adminparking() {


    let [users, setUsers] = React.useState([])
    useEffect(() => {
        if (!window.localStorage.getItem("token")) {
            alert("error occured")
            window.location.href = "http://localhost:3000"
        }
        fetch("http://localhost/admin-parking?token=" + window.localStorage.getItem("token"))
            .then(ev => ev.text())
            .then(ev => {
                setUsers(JSON.parse(ev))
                console.log(users);
            })
    }, [])

    return (
        <>
            <div className="activity">
                <div className="title">
                    <i className="uil uil-clock-three" />
                    <span className="text">Parking Count: </span>
                </div>

                <table id='table' border={2}>
                    <tr >
                        <th>Name</th>
                        <th>Email</th>
                        <th>Visitors Name</th>
                        <th>Visitors Name</th>
                        <th>Visiting Date</th>
                        <th>Entry Time</th>
                        <th>Exit Time</th>
                    </tr>

                    {users.map((val) => {
                        let values = val.split(",")
                        return (
                            <tr >
                                <td>{values[0]}</td>
                                <td>{values[1]}</td>
                                <td>{values[2]}</td>
                                <td>{values[3]}</td>
                                <td>{values[4]}</td>
                                <td>{values[4]}</td>
                                <td>{values[5]}</td>
                            </tr>
                        )
                    })}

                    {/* <tr >
                        <td>Name</td>
                        <td>Email</td>
                        <td>Visitors Name</td>
                        <td>Visitors Name</td>
                        <td>Visiting Date</td>
                        <td>Entry Time</td>
                        <td>Exit Time</td>
                    </tr> */}

                </table>

                {/* <div className="activity-data">
                    <div className="data names">
                        <span className="data-title">Owner Name</span>
                        <span className="data-list">Prem Shahi</span>
                        <span className="data-list">Deepa Chand</span>
                        <span className="data-list">Manisha Chand</span>
                        <span className="data-list">Pratima Shahi</span>
                        <span className="data-list">Man Shahi</span>
                        <span className="data-list">Ganesh Chand</span>
                        <span className="data-list">Bikash Chand</span>
                    </div> */}
                {/* <div className="data email">
                        <span className="data-title">Vechile</span>
                        <span className="data-list">Bike</span>
                        <span className="data-list">Car</span>
                        <span className="data-list">Bike</span>
                        <span className="data-list">Bike</span>
                        <span className="data-list">Car</span>
                        <span className="data-list">Car</span>
                        <span className="data-list">Car</span>
                    </div>
                    <div className="data joined">
                        <span className="data-title">License Plate</span>
                        <span className="data-list">TN-98-B-7893</span>
                        <span className="data-list">AP-09-BV-1278</span>
                        <span className="data-list">TN-09-AB-7893</span>
                        <span className="data-list">TN-23-AV-7786</span>
                        <span className="data-list">TN-56-Z-4444</span>
                        <span className="data-list">TN-04-A-8876</span>
                        <span className="data-list">TN-45-WW-9845</span>
                    </div>
                    <div className="data type">
                        <span className="data-title">Entry Time</span>
                        <span className="data-list">09-10</span>
                        <span className="data-list">08-15</span>
                        <span className="data-list">09-10</span>
                        <span className="data-list">09-20</span>
                        <span className="data-list">10-15</span>
                        <span className="data-list">10-25</span>
                        <span className="data-list">11-30</span>
                    </div>
                    <div className="data status">
                        <span className="data-title">Exit Time</span>
                        <span className="data-list">09-50</span>
                        <span className="data-list">10-15</span>
                        <span className="data-list">09-30</span>
                        <span className="data-list">09-59</span>
                        <span className="data-list">10-50</span>
                        <span className="data-list">11-00</span>
                        <span className="data-list">12-00</span>
                    </div> */}
                {/* </div> */}
            </div>
        </>
    )
}
