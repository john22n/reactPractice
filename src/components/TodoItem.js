import React, { Component } from 'react';

class TodoItem extends Component {


    render() {
        console.log(this.props);
        return (
            <li className="Todo">
                <strong>{this.props.todos.title}</strong>
            </li>
        );
    }
}


export default TodoItem;
