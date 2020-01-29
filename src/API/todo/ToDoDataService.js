import axios from 'axios'

class ToDoDataService{

    retreiveAllToDosService(name) {
        //console.log('executed service')
        return axios.get(`http://localhost:8080//users/${name}/todos`);        
    }
    deleteTodoService(name,id) {
        //console.log('executed service')
        return axios.delete(`http://localhost:8080//users/${name}/todos/${id}`);        
    }
}

export default new ToDoDataService()