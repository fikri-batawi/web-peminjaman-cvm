import React from 'react'
import {useHistory} from 'react-router-dom'
const Login = () => {
    const history = useHistory()
    const gotoDashboard = ()=>{
        history.push('/dashboard')
        history.go(0)
    }

    return (
        <>
         <button onClick={gotoDashboard}>Dashboard</button>   
        </>
    )
}

export default Login
