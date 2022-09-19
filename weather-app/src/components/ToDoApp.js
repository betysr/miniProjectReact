import React, {useState, useEffect} from 'react'
import { TextField, Button } from '@mui/material'
import './ToDoApp.css';

function ToDoApp() {
    
    const [toDo, setToDo] = useState('');
    const [toDoList, setToDoList] = useState([]);


    const addTodolist = (event) => {
        setToDo(event.target.value);
        setToDoList([...toDoList, toDo]);
    }

  return (
    <div>
        <div className="toDoApp">
            <div className="main">
                <div className="input">
                    <TextField id="outlined-basic" label="ToDo" color="success" placeholder='Enter todo ' value={toDo} 
                            onChange={event => setToDo(event.target.value)} />
                    <Button variant="contained" color='success' onClick={addTodolist}>Add</Button>
                </div>
                <div className="list">
                    <ol className="orderedList">
                        {toDoList.map((item,key) => {
                                return <li key={key}>{item}</li>
                            })} 
                    </ol>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ToDoApp