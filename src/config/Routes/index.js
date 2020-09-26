import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Dashboard } from '../../pages'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Dashboard/>
                </Route>
            </Switch>
        </Router>
            
        
    )
}

export default Routes
