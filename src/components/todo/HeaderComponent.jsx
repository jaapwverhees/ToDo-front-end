import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AuthenticantionService from './AuthenticationService.jsx'
import { withRouter } from 'react-router';


class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticantionService.isUserLoggedIn();
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.google.com" className="navbar-brand">codeCafé</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/welcome/todoapp">Home</Link></li>
                        {isUserLoggedIn &&<li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn &&<li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn &&<li><Link className="nav-link" to="/logout"onClick={AuthenticantionService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);
