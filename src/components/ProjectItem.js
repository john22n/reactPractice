import React, { Component } from 'react';

class projectItem extends Component {

    deleteProject() {
        console.log("test");
        this.props.onDelete()
    }
    render() {
        console.log(this.props);
        return (
            <li className="Project">
                <strong>{this.props.project.title}- {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a></strong>
            </li>
        );
    }
}


export default projectItem;
