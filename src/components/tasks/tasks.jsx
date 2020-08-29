import React from 'react';
import '../tasks/tasks.css';

const Tasks = (props) => {
    return (
      <div className='task-container'>
        <h3 className='your-tasks'>Your Tasks:</h3>
        <div className='tasks'>
          {props.tasks.map((item, i) => 
                      <div className='task' key={item}>
                        <div>
                          {(props.tasks.indexOf(item) + 1) + '. ' + item}
                        </div>
                        <button className='delete' onClick={() => props.handleDelete(i)}>x</button>
                      </div>)
          }
        </div>
      </div>
    )
  }

  export default Tasks;