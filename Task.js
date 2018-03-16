import React, {Component} from 'react';

class Task extends Component {

  render() {
  return(
    <div className ='Task'>
    <span style={{textDecoration: this.props.todo.done? 'line-through':
  'none'}}>
    {this.props.todo.id}
    {this.props.todo.description}
    {this.props.todo.dateline}
    {this.props.todo.done}
    </span >
    <button onClick = {() => this.props.handleClick(this.props.index)}>{this.props.todo.done? 'Undo':'Complete'}</button>
    </div>
  )
  }
}



export default Task;
