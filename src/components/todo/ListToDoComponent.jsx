import React, {Component} from 'react'
import ToDoDataService from '../../API/todo/ToDoDataService.js'
import AuthenticationService from './AuthenticationService.jsx'

class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos : [],
            message: null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }
    componentDidMount(){
        this.refreshTodos()
        
    }

    refreshTodos(){
        let username = AuthenticationService.getLoggedInUser
        ToDoDataService.retreiveAllToDosService(username)
    }

    deleteTodoClicked(id){
        let username = AuthenticationService.getLoggedInUser()
        ToDoDataService.deleteTodoService(username, id)
        .then(response =>{
            this.setState({message:`Delete of todo ${id} succesfull`})
            this.refreshTodos();
        })
        .catch(response =>{this.setState({message:`Delete of todo ${id} unsuccesfull!`})})
    }

    updateTodoClicked(id){
        this.props.history.push(`/todos/${id}`)
    }

    render() {
        return (
            <div>
                 <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-succes">{this.state.message}</div>}
                 <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map (
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-succes" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                    </tr>
                            )
                            }
                        </tbody>
                    </table>
                 </div>
            </div>
        )
    }
}

export default ListTodosComponent;