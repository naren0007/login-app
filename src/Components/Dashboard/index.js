import React from 'react'
import { useSelector } from "react-redux";

function Dashbaord() {
    const userData = useSelector(state => state.dashboard.user);
    console.log(userData[0]);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userData && userData.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Dashbaord;