import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Dashboard, Login } from '../../pages'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/dashboard" exact>
                    <Dashboard/>
                </Route>
                <Route path="/">
                    <Login/>
                </Route>
            </Switch>
        </Router>
            
        
    )
}

export default Routes
