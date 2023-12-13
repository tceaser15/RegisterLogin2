import React, { useState, useNavigate } from 'react';
import "./account.css";


const Account = () => {
    const [action, setAction] = useState("Sign Up");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");



    return (
        <div className="account_container">
            <div className="account_header">
                <div className="text">{action}</div>
                <div className="underline"></div>

            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : <div className="input">
                    <input type="text" placeholder="Name" />
                </div>}

                <div className="input">
                    <input value={username} onChange={e => setUsername(e.target.value)} type="email" placeholder="Email Id" />
                </div>
                <div className="input">
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            }
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    )
}

export default Account