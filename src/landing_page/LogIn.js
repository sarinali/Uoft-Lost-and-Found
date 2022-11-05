// import "./LoginBody.js"
import React, { useState } from "react"
import {onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import TextField, {HelperText, Input} from '@material/react-text-field';
import {Link} from 'react-router-dom';
import { auth } from "../firebase/firebase-config";
import { Navigate, Outlet } from "react-router-dom"

const userLog = {loginId : false};

const useAuth = () => {
    return userLog.loginId;
 };

// function LogIn(props) {
const LogIn = (props) => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    
    const center = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const login = async () => {
        console.log("running")
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                username, 
                password
            )
            userLog.loginId = true;
        } catch(error) {
            console.log("error")
        }
    }

    const logout = async () => {
        userLog.loginId = false;
        await signOut(auth);
    }

    return(
        <div className="login-body">
            <div className="login-container">
                <div className="sign-in-container">Sign Into UFound</div>
                {/* <React.Fragment></React.Fragment> */}
                

                
            </div>

            <div style={center}>UTORID</div>

            <div className="utorid-field" style={center}>
                <TextField helperText={<HelperText></HelperText>} variant="outlined">
                    <Input value={username} onChange={e=>setUserName(e.target.value)}/>
                </TextField>
            </div>

            <div style={center}>Password</div>
            
            <div style={center}>
                <TextField helperText={<HelperText></HelperText>}>
                    <Input value={password} onChange={e=>setPassword(e.target.value)}/>
                </TextField>
            </div>

            <div style={center}>  
                <Link to="/home">
                    <button onClick={login}>Submit</button>
                    </Link>
            </div>
            <p>user signed in</p>
            <p>{user?.email}</p>
            <button onClick={logout}>Sign Out</button>
        </div>
    )
}

const ProtectedRoutes = () => {
    return useAuth() ? <Outlet /> : <Navigate to="/"/>;
}

export {ProtectedRoutes, LogIn};