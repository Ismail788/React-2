import React, { Component } from 'react';
import  Form from './form';
import  List from './list';

class App extends Component {
  state ={
    inputValue: '',
    todos:[
      {
        'id':'1',
      'description': 'Get out of bed',
       'dateline': '2017-09-11',
       'done': true
     },
      {
        'id':'2',
         'description': 'Brush teeth',
          'dateline': '2017-09-10',
          'done': false
        },
      {
        'id':'3',
         'description': 'Eat breakfast',
          'dateline': '2017-09-09',
          'done': false
        }
    ]
  }
handleChange = (evt) =>{
  this.setState({inputValue: evt.target.value});
}
handleClick= (index) =>{

  const todos = this.state.todos;
  todos[index].done= !todos[index].done;
  this.setState({todos});

}
handleSubmit= (evt) =>{
   evt.preventDefault();
 const newTodo ={
   id:this.state.inputValue,
   done: this.state.done
};
const todos = this.state.todos;
todos.push(newTodo);
this.setState({todos, inputValue:''})


}
  render() {
  return (
  <div className="div">
    <h1>React homework2</h1>
        <Form
          handleChange = {this.handleChange}
          inputValue = {this.state.inputValue}
          handleSubmit = {this.handleSubmit} />
        <List
        handleClick= {this.handleClick}
     todos={this.state.todos}  />
  </div>

      )
    }
}

export default App;
