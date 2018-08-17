import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom'

import App from '../App'

import home from '../component/home'
import Work from '../component/work'

export default class extends Component{
    render(){
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path="/" exact component={home}/>
                        <Route path="/work" component={Work}/>
                    </Switch>
                </App>
            </Router>
        )  
    }
}