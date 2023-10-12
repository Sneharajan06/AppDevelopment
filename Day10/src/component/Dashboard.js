import React, { useEffect, useState } from 'react'
import "./dashboard.css"
import "../Admin.css"
export default function () {

    let [users, setUsers] = useState([])

    useEffect(() => {
        if (!window.localStorage.getItem("token")) {
            alert("login first")
            window.location.href = "http://localhost:3000"
        }
        fetch("http://localhost/dashboard?token=" + window.localStorage.getItem("token"))
            .then(ev => ev.text())
            .then(ev => {
                let analysis = ev.split(",")
                document.querySelector("#users").textContent = analysis[0]
                document.querySelector("#parking").textContent = analysis[1]
                document.querySelector("#visitor").textContent = analysis[2]
            })

        fetch("http://localhost/dashboard-get-users?token=" + window.localStorage.getItem("token"))
            .then(ev => ev.text())
            .then(ev => {
                setUsers(JSON.parse(ev))
            })




    }, [])

    return (
        <div id='dashboard'>
            <>
                <nav>
                    <div className="logo-name">
                        <div className="logo-image">
                            <img src="images/logo.png" alt="" />
                        </div>
                        <span className="logo_name">Admin Board</span>
                    </div>
                    <div className="menu-items">
                        <ul className="nav-links">
                            <li>
                                <a href="http://localhost:3000/admin-visitor">
                                    <i className="uil uil-estate" />
                                    <span className="link-name">Visitors</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://localhost:3000/admin-parking">
                                    <i className="uil uil-files-landscapes" />
                                    <span className="link-name">Vehicles</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://localhost:3000/">
                                    <i className="uil uil-chart" />
                                    <span className="link-name">Log Out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <section className="dashboard">
                    <div className="dash-content">
                        <div className="overview">
                            <div className="title">
                                <i className="uil uil-tachometer-fast-alt" />
                                <span className="text">Dashboard</span>
                            </div>
                            <div className="boxes">
                                <div className="box box1">
                                    <i className="uil uil-thumbs-up" />
                                    <span className="text">Users count</span>
                                    <span id='users' className="number">50,120</span>
                                </div>
                                <div className="box box2">
                                    <i className="uil uil-comments" />
                                    <span className="text">Parking</span>
                                    <span id='parking' className="number">20,120</span>
                                </div>
                                <div className="box box3">
                                    <i className="uil uil-share" />
                                    <span className="text">Visitors</span>
                                    <span id='visitor' className="number">10,120</span>
                                </div>
                            </div>
                        </div>
                        <div className="activity">
                            <div className="title">
                                <i className="uil uil-clock-three" />
                                <span className="text">Recent Activity</span>
                            </div>

                            <table id='table' width={"100px"} border={2}>
                                <tr >
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>role</th>
                                </tr>

                                {users.map((val, ind) => {
                                    let values = val.split(",")
                                    console.log(values)
                                    return (
                                        <tr >
                                            <td>{ind + 1}</td>
                                            <td>{values[0]}</td>
                                            <td>{values[1]}</td>
                                            <td>{values[2]}</td>
                                            <td>{values[3]}</td>
                                        </tr>
                                    )
                                })}
                            </table>



                            {/* <div className="activity-data">
                                <div className="data names">
                                    <span className="data-title">Name</span>
                                    <span className="data-list">Prem Shahi</span>
                                    <span className="data-list">Deepa Chand</span>
                                    <span className="data-list">Manisha Chand</span>
                                    <span className="data-list">Pratima Shahi</span>
                                    <span className="data-list">Man Shahi</span>
                                    <span className="data-list">Ganesh Chand</span>
                                    <span className="data-list">Bikash Chand</span>
                                </div>
                                <div className="data email">
                                    <span className="data-title">Email</span>
                                    <span className="data-list">premshahi@gmail.com</span>
                                    <span className="data-list">deepachand@gmail.com</span>
                                    <span className="data-list">prakashhai@gmail.com</span>
                                    <span className="data-list">manishachand@gmail.com</span>
                                    <span className="data-list">pratimashhai@gmail.com</span>
                                    <span className="data-list">manshahi@gmail.com</span>
                                    <span className="data-list">ganeshchand@gmail.com</span>
                                </div>
                                <div className="data joined">
                                    <span className="data-title">Joined</span>
                                    <span className="data-list">2022-02-12</span>
                                    <span className="data-list">2022-02-12</span>
                                    <span className="data-list">2022-02-13</span>
                                    <span className="data-list">2022-02-13</span>
                                    <span className="data-list">2022-02-14</span>
                                    <span className="data-list">2022-02-14</span>
                                    <span className="data-list">2022-02-15</span>
                                </div>
                                <div className="data type">
                                    <span className="data-title">Type</span>
                                    <span className="data-list">New</span>
                                    <span className="data-list">Member</span>
                                    <span className="data-list">Member</span>
                                    <span className="data-list">New</span>
                                    <span className="data-list">Member</span>
                                    <span className="data-list">New</span>
                                    <span className="data-list">Member</span>
                                </div>

                            </div> */}
                        </div>
                    </div>
                </section>
            </>

        </div>


    )
}
