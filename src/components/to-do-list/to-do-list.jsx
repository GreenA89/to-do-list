import React from 'react';
import '../to-do-list/to-do-list.css';
// Components
import Input from '../input/input';
import Title from '../title/title';
import Tasks from '../tasks/tasks';

class ToDoList extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        toDoList: [],
        userInput: '',
        removedItems: [],
        itemWasDeleted: false,
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleUndo = this.handleUndo.bind(this);
    }
    handleSubmit() {
      const tasks = this.state.toDoList.slice()
      if (this.state.toDoList.length < 10 && !tasks.includes(this.state.userInput) && this.state.userInput !== '') {
        this.setState({
           toDoList: tasks.concat([this.state.userInput]),
           userInput: '',
           itemWasDeleted: false,
         })
      } else {
        alert('You have entered the same item twice, entered a blank item, or have too many items, Bucko!')
      }
    }
    handleChange(e) {
      this.setState({
        userInput: e.target.value,
      })
    }
    handleDelete(i) {
      var tasks = this.state.toDoList.slice();
      var removedItem = tasks.splice(i, 1);
      var removedItems = this.state.removedItems
      removedItems.push({item: removedItem[0], index: i})
      this.setState({
        toDoList: tasks,
        removedItems: removedItems,
        itemWasDeleted: true,
      })
    }
    handleUndo() {
      var tasks = this.state.toDoList;
      var removedItems = this.state.removedItems;
      var lastIndex = this.state.removedItems.length - 1;
      var undoItem = removedItems.splice(lastIndex, 1)
      tasks.push(undoItem[0].item)
      this.setState({
        toDoList: tasks,
        itemWasDeleted: removedItems > 0 ? true : false,
      })
    }
    
    render() {
    
      return (
        <div className='app'>
          <Title 
            handleUndo={this.handleUndo}
            removedItems={this.state.removedItems}
            itemWasDeleted={this.state.itemWasDeleted}
          />
          <Input 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleValue={this.state.userInput}
          />
          <Tasks 
            handleDelete={this.handleDelete} 
            tasks={this.state.toDoList} 
          />
        </div>
      )
    }
  }

  export default ToDoList;