import { createBrowserHistory } from 'history'
import React from 'react'
// import {createBrowserHistory} from 'history'
const Login = (props) => {
    const history = createBrowserHistory()
    const gotoDashboard = ()=>{
        window.location.href = "/dashboard"
    }
    return (
        <>
         <button onClick={gotoDashboard}>Dashboard</button>   
        </>
    )
}

export default Login
