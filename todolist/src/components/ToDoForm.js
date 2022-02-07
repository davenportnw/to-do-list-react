import React from "react";

class TodoForm extends React.Component {
    //create a controled componet that handles that state of the form
    constructor(props) {
        super(props);
        this.state = {todoInput: " "};
    }
    handleChange = event => {
        this.setState({ todoInput: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        alert(`A todo was added: ${this.state.todoInput}`);
    }
    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <input type="text"
                       placeholder="Add a todo" 
                       value={this.state.toDo} 
                       onchange={event => this.handleChange(event)}
                />
                <input type ="submit" value="Submit"/>
            </form>
        );
    }
}

export default TodoForm;