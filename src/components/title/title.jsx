import React from 'react';
import '../title/title.css';

const Title = (props) => {
    if (props.removedItems.length > 0) {
      return (
        <div className='title-container'>
          <div className='title' style={{marginRight: 12}}>
            <h2>To Do List</h2>
          </div>
          <button className='undo' onClick={props.handleUndo}>Undo Del</button>
        </div>
        )
      } else if (!props.itemWasDeleted) {
      return (
        <div className='title'>
          <h2>To Do List</h2>
        </div>
      )
    };
  };

  export default Title;