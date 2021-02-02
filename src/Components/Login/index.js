import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { checkData } from "./loginActions";
import { useHistory } from "react-router-dom";

function Login() {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const errorStatus = useSelector((state) => state.login.errorStatus);
    const loggedIn = useSelector((state) => state.login.loggedIn);


    if (loggedIn) {
        history.push("/dashboard");
        localStorage.setItem('login', true);
    } else {
        localStorage.clear();
    }

    const checkValue = (e) => {
        e.preventDefault();
        let userCred = {
            "email": email,
            "password": password
        }

        dispatch(checkData(userCred));

    }


    return (
        <>
            <div>
                <div className="login-page">
                    <div className="form">
                        <h1>Sign In</h1>
                        <form className="login-form">
                            <input type="text"
                                placeholder="username"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }
                                }
                            />

                            <input type="password"
                                placeholder="password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />

                            <button onClick={(e) => checkValue(e)}>login</button>
                        </form>
                    </div>
                </div>
            </div>

            {errorStatus && errorStatus ? <p class="toast errorToast">Plese enter valid login credential!</p> : ""}
        </>
    )
}

export default Login;
