import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar'
import ReactUploadImage from './upload.js'

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     data: '',
  //   }
  // }
  handleClick = () => {
    fetch('http://localhost:5001/api/').then( data => data.json())
    .then( res => {
      console.log("^&^&^&^&^&^", res);
      this.setState({
        data: res.text,
      })
    })
  }
  render() {
    return (
      <div className="App">
        {/* <button onClick={this.handleClick}>Click to get data</button>
        <div>{this.state.data}</div> */}
        <NavBar/>
        <p>Work in Progress</p>
        <ReactUploadImage />
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div>
        // <NavBar/>
        // <p>Work in Progress</p>
        // <ReactUploadImage />
//       </div>
//     );
//   }
// }


export default App;
