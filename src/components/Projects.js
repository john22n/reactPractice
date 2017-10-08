import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

    deleteProject(id) {
        this.props.onDelete(id);
    }




    render() {
        console.log(this.props);
        let projectItems;
        if(this.props.projects) {
            projectItems = this.props.projects.map(project => {
                return (
                    <ProjectItem project={project} onDelete={this.deleteProject.bind(this)}/>
                )
            })
        }
        return (
            <div className="projects">
                {this.props.test}
                {projectItems}
            </div>
        );
    }
}


export default Projects;
