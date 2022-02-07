import React from "react";
import TodoList from "./components/todoList";
import TodoForm from "./components/ToDoForm";

addToDo = todo => {
  this.setState(prevState => ({
    todos: [...prevState.todos, todo],
  }));
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      todos:["Finish Homework", "Wash dishes", "Clean room", "Make waffles"],
  };
  }

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <TodoList todos={this.state.todos}/>
        <TodoForm addToDo={this.addTodo}/>
      </div>
    ); 
  }
}

export default App;
