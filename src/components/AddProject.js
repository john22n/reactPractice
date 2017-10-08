import React, { Component } from 'react';
import uuid from 'uuid';
import ProjectItem from './ProjectItem';

class addProject extends Component {
    constructor() {
        super();
        this.state = {
            newProject: {

            }
        }
    }
    static defaultProps = {
        categories: ['web design', 'web development', 'Mobile development']
    };

    handleSubmit(e) {
        if (this.refs.title.value === '') {

        } else {
            this.setState({newProject: {
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function() {
                //console.log(this.state);
                this.props.addProject(this.state.newProject);
            })
        }
        e.preventDefault();
    }


    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
            }
        );

        return (
            <div >
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label>
                        <br/>
                        <input type="text" ref="title"/>
                    </div>
                    <div>
                        <label htmlFor="">Category</label>
                        <select name="" id="" ref="category">
                            {categoryOptions}
                        </select>

                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}
//
// addProject.propTypes = {
//     categories: React.PropTypes.array,
// }
//

export default addProject;
