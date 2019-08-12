import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.getName = this.getName.bind(this);
    this.getLastName = this.getLastName.bind(this);
    this.state = {
      firstName: '',
      lastName: ''
    }
  }
  getName(e){
    this.setState({firstName: e.target.value})

  }
  getLastName(e){
    this.setState({lastName:e.target.value})

  }
  showName(){
    
  }
  render(){
    return (
      <div className="App">
        <div className="form">
         FirstName <input type="text" placeholder="FirstName" value={this.state.firstName} onChange = {this.getName}></input>
         <br/>
         LastName <input type="text" value={this.state.lastName} placeholder="LastName" onChange = {this.getLastName}></input>
         <button onClick = {this.showName}>Show Name</button>
         <h1>{this.state.firstName} </h1>
         <h1>{this.state.lastName}</h1>
        </div>
      
      </div>
    );
  }
  }
 

export default App;
