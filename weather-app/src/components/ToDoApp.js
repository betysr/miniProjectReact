import React, {useState} from 'react'
import { TextField, Button } from '@mui/material'
import './ToDoApp.css';

function ToDoApp() {
    
    const [toDo, setToDo] = useState('');
    const [toDoList, setToDoList] = useState([]);
    
    const addTodolist = (event) => {
        setToDo(event.target.value);
        setToDoList([...toDoList, toDo]);
        console.log(toDoList);
    }

  return (
    <div>
        <div className="toDoApp">
            <div className="container">
                <div className="search">
                    <TextField id="outlined-basic" label="ToDo" color="success" placeholder='Enter todo ' value={toDo} 
                            onChange={event => setToDo(event.target.value)} />
                    <Button variant="contained" color='success' onClick={addTodolist}>Add</Button>
                </div>
                <div className="toDoList">
                    <ul>

                    </ul>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ToDoApp