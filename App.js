import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'

class App extends Component {
  constructor(props) {
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
  getLastName(e) {
  this.setState({lastName: e.target.value})
  }
  render() {
    console.log("render");
    return (
        <div className="App">
          <div className="form">
            FirstName <input type="text" placeholder="FirstName" value={this.state.firstName} onChange = {this.getName}></input>
            <br/>
            LastName <input type="text" value={this.state.lastName} placeholder="LastName" onChange = {this.getLastName}></input>
            <br />
            <button onClick = {this.showName}>Show Name</button>
            <h1>{this.state.firstName} </h1>
            <h1>{this.state.lastName}</h1>
          </div>
          <div className="Age-label">
            your age: <span>{this.props.age}</span>
          </div>
          <button onClick={this.props.onAgeUp}>Age UP</button>
        </div>
    );
    }
}

const mapStateToProps= state =>{
  console.log("mapStateToProps");
  return {
    age: state.age
  };
};

const mapDispatchToProps = dispatch =>{
  console.log("mapDispatchToProps");
  return {
    onAgeUp: ()=> dispatch({type: 'Add'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
