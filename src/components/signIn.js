import React from 'react';  
import './signin.css';
class SignIn extends React.Component{  // using class component
    constructor(){
        super()
        this.state={
            username:'',  // initially value is null
            password:''
        }
        this.Submit = this.Submit.bind(this)   // binding the submit function with the state
    }
    usernamehandler =(e)=>{
       this.setState({
        username:e.target.value
       })
    }                                // setting the state value by the target value
    passwordhandler = (e)=>{
        this.setState({
            password:e.target.value
        })
    }
    Submit = (e)=>{
        alert(`${this.state.username} Login Succesfully...`);
        console.warn(this.state);
        this.setState({
            username:'',
           password:''        // after login setting the state value again to null
        })
        e.preventDefault()

    }
    render(){
        return(
            <div className='signin'>
            <div className='inf'> <h2>Hello!!!</h2><br></br><h2>You can login from here...</h2> </div> <br></br>
            <form onSubmit={this.Submit}>
            <input type='text' placeholder='username...' required='true' value={this.state.username} onChange={this.usernamehandler}></input><br></br><br></br>
            <input type='password' placeholder='password...' required='true' value={this.state.password} onChange={this.passwordhandler}></input><br></br><br></br>
            <br></br><button>SignIn</button>
            </form>
            </div>
        )
    }
}
export default SignIn;  // eporting the component