import React, { useEffect } from 'react'
import "./Admin.css"
export default function Adminvisitor() {

    let [users, setUsers] = React.useState([])
    useEffect(() => {
        if (!window.localStorage.getItem("token")) {
            alert("error occured")
            window.location.href = "http://localhost:3000"
        }
        fetch("http://localhost/admin-visitor?token=" + window.localStorage.getItem("token"))
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
                    <span className="text">Visitors : </span>
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
                {/* <div className="activity-data"> */}



                {/* <div className="data names">
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
                    <div className="data email">
                        <span className="data-title">Visitors Name</span>
                        <span className="data-list">premshahi</span>
                        <span className="data-list">deepachand</span>
                        <span className="data-list">prakashhai</span>
                        <span className="data-list">manishachand</span>
                        <span className="data-list">pratimashhai</span>
                        <span className="data-list">manshahi</span>
                        <span className="data-list">ganeshchand</span>
                    </div>
                    <div className="data joined">
                        <span className="data-title">Visiting Date</span>
                        <span className="data-list">2022-02-12</span>
                        <span className="data-list">2022-02-12</span>
                        <span className="data-list">2022-02-13</span>
                        <span className="data-list">2022-02-13</span>
                        <span className="data-list">2022-02-14</span>
                        <span className="data-list">2022-02-14</span>
                        <span className="data-list">2022-02-15</span>
                    </div>
                    <div className="data type">
                        <span className="data-title">Entry Time</span>
                        <span className="data-list">01-10</span>
                        <span className="data-list">01-15</span>
                        <span className="data-list">02-15</span>
                        <span className="data-list">03-00</span>
                        <span className="data-list">03-10</span>
                        <span className="data-list">04-10</span>
                        <span className="data-list">04-10</span>
                    </div>
                    <div className="data status">
                        <span className="data-title">Exit Time</span>
                        <span className="data-list">20-00</span>
                        <span className="data-list">02-15</span>
                        <span className="data-list">03-30</span>
                        <span className="data-list">03-50</span>
                        <span className="data-list">03-55</span>
                        <span className="data-list">04-56</span>
                        <span className="data-list">05-00</span>
                    </div> */}
                {/* </div> */}
            </div>
        </>
    )
}
