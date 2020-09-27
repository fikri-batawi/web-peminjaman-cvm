import { createBrowserHistory } from 'history'
import React, { useEffect } from 'react'
import {Redirect,useHistory} from 'react-router-dom'
// import {createBrowserHistory} from 'history'
const Login = (props) => {
    const history = useHistory()
    const gotoDashboard = ()=>{
        history.push('/')
        history.go(0)
    }

    return (
        <>
         <button onClick={gotoDashboard}>Dashboard</button>   
        </>
    )
}

export default Login
