import React from "react";


const todos = ["Finish Homework", "Wash Dishes", "Clearn room", "Make Waffles"];
//create a todo component that passes the todo as a prop from the map function
//using locally so no need to export.
const Todo = props => <li>{props.todo}</li>;
const TodoList = props => (
    // Use map feature to return a new array of our list items for every todo in the todo list
    <ul>
        {props.todos.map(todo => (
            <Todo todo={todo} key={todo}/>
        ))}
    </ul>
    );

export default TodoList;