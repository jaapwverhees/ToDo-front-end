import React, {Component} from 'react'
import AuthenticantionService from './AuthenticationService.jsx'

class LogoutComponent extends Component {
    render() {
        return (
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    See you soon!
                </div>
                {AuthenticantionService.logout()}
            </>
        )
    }
}

export default LogoutComponent