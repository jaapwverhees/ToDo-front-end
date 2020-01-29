import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../API/todo/HelloWorldService.js'
class WelcomeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            welcomeMessage: ''
        }
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccesfulResponse = this.handleSuccesfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
    }
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>.
                </div>
                <div className="container">
                    Click here to get een customized welcome message.
                </div>
                <div><button onClick={this.retrieveWelcomeMessage}className='btn btn-succes'>Get Message</button></div>
                <div className='container'>
                    {this.state.welcomeMessage}
            
                </div>
            </>
        )        
    }
    retrieveWelcomeMessage(){
        HelloWorldService.executeHelloWorldPathVaribleService(this.props.match.params.name)
        .then(response => this.handleSuccesfulResponse(response))
        .catch(newError => this.handleError(newError))
    }
    handleSuccesfulResponse(response){
        this.setState({welcomeMessage: response.data.message})
    }

    handleError(error){
        this.setState({welcomeMessage: error.response.data.message})
        console.log(error.response.data.message)
    }
}
export default WelcomeComponent