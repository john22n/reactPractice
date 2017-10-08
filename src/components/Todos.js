import React, { Component } from 'react';

import TodoItems from './TodoItem'

class Todos extends Component {

    render() {
        console.log(this.props);
        let todoItems;
        if(this.props.todos) {
            todoItems = this.props.todos.map(todo => {
                return (
                    <TodoItems key={todo.title} todo={todo} />
                )
            })
        }
        return (
            <div className="Todos">
                {todoItems}
            </div>
        );
    }
}


export default Todos;
