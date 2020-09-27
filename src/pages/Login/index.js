import React from 'react'
import {useHistory} from 'react-router-dom'
const Login = () => {
    const history = useHistory()
    const gotoDashboard = ()=>{
        history.push('/dashboard')
    }

    return (
        <>
         <button onClick={gotoDashboard}>Dashboard</button>   
        </>
    )
}

export default Login
