import React, { Component } from 'react';
import logo from './logo.svg';
import uuid from 'uuid';
import './App.css';

// import Project from './components/Projects';
import Project from './components/Projects';
import AddProject from './components/AddProject';
import Todos from './components/Todos';
import $ from 'jquery';


class App extends Component {
    constructor() {
        super();
        this.state = {
                projects:[

             ],
            todos:[]
        }
    }


    handleAddProject(project) {
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects: projects})
    }

    handleDeleteProject(id) {
        let project = this.state.projects;
        let index = project.findIndex( (x)=> x.id === id);
        project.splice(index, 1);
        this.setState({projects: project})
    }

    getTodos() {
        $.ajax( {
            url: 'https://jsonplaceholder.typicode.com/todos',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({todos: data, function(){
                    console.log(this.state);
                }})
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }
        })
    }

    getProjects() {
        this.setState({projects: [
            {
                id: uuid.v4(),
                title: 'buisiness',
                category: 'webdesign'
            },
            {
                id: uuid.v4(),
                title: 'social application',
                category: 'mobile dev'
            },
            {
                id: uuid.v4(),
                title: 'e-commerece shopping cart',
                category: 'web development'
            },
        ]})
    }
    // life cycle method
    componentWillMount() {
        this.getProjects();
        this.getTodos();
    }

    componentDidMount() {
        this.getTodos();
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React</h1>
        </header>


          {/*// start here*/}
        <AddProject addProject={this.handleAddProject.bind(this)}/>
          <hr/>
        <Project projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
          <hr/>
          <Todos todos={this.state.todos}/>

      </div>
    );
  }
}

export default App;
