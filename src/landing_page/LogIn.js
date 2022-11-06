// import "./LoginBody.js"
import React, { useState } from "react"
import {onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import TextField, {HelperText, Input} from '@material/react-text-field';
import { auth } from "../firebase/firebase-config";
import { Navigate, Outlet } from "react-router-dom"

var userEmail

const userLog = {loginId : false};

const useAuth = () => {
    return userLog.loginId;
 };

function logInMessage(flag) {
    if (flag){
        return (
            <div>
                <p>Logged In</p>
                <Outlet /> : <Navigate to="/home"/>
            </div>
        )
    } 
}


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
      
        const user = await signInWithEmailAndPassword(
            auth,
            username, 
            password
        )
        userEmail = username
        userLog.loginId = true;
        
    }

    const logout = async () => {
        userLog.loginId = false;
        await signOut(auth);
        console.log("hello")
    }

    return(
        <div className="login-body">
            <div className="login-container">
                <div className="sign-in-container">Sign Into UFound</div>
                {/* <React.Fragment></React.Fragment> */}
                

                
            </div>
            
            <div className="small-gap"></div>
            
            <div style={center}>UTORID</div>

            <div className="utorid-field" style={center}>
                {/* <TextField helperText={<HelperText></HelperText>} variant="outlined">
                    <Input value={username} onChange={e=>setUserName(e.target.value)}/>
                </TextField> */}
                <form value={username} onChange={e=>setUserName(e.target.value)}>
                    <input type="text" className="username-field" />
                </form>
            </div>

            <div className="small-gap"></div>

            <div style={center}>Password</div>
            
            <div style={center}>
                {/* <TextField helperText={<HelperText></HelperText>} className="username-field">
                    <Input value={password} onChange={e=>setPassword(e.target.value)}/>
                </TextField> */}
                <form value={password} onChange={e=>setPassword(e.target.value)}>
                    <input type="password" className="password-field" />
                </form>
            </div>

            <div className="gap"></div>

            <div style={center}> 
                {/* <button onClick={login}>Submit</button> */}
                <button class="btn btn-primary" type="submit" onClick={login}>Submit</button>
            </div>

            <div style={center}>
                <p>{logInMessage(userLog.loginId)}</p>            
            </div>
            <div style={center}>                      
                {/* <button onClick={logout}>Sign Out</button> */}
                {/* <button class="btn btn-primary" type="submit" onClick={logout}>Log Out</button> */}

            </div> 
            <div className="spacer-login"></div>
        </div>
    )
}

const ProtectedRoutes = () => {
    return useAuth() ? <Outlet /> : <Navigate to="/"/>;
}

export {ProtectedRoutes, LogIn, userEmail};