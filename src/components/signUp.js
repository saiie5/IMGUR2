import React from 'react';
import './signup.css'

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            firstNameError:'',
            lastName:'',
            lastNameError:'',
            username:'',
            usernameError:'',
            email:'',
            emailError:'',
            password:'',
            passwordError:''
        }
        this.submithandler = this.submithandler.bind(this)
    }
    firsthandler = (e)=>{
        this.setState({
            firstName:e.target.value
        })
    }
    lasthandler = (e)=>{
        this.setState({
            lastName:e.target.value
        })
    }
    usernamehandler = (e)=>{
        this.setState({
            username:e.target.value
        })
    }
    emailhandler = (e)=>{
        this.setState({
            email:e.target.value
        })
    }
    passwordhandler = (e)=>{
        this.setState({
            password:e.target.value
        })
    }

    valid(){
      if(this.state.firstName.length<1){
         this.setState({firstNameError:'Enter your FirstName'})
      } 
        else if(this.state.lastName.length<1){
            this.setState({lastNameError:'Enter your LastName'})
        } 
         else if(this.state.username.length<6 ){
           this.setState({usernameError:'username length should be more than 6 character'})
         }
         else if(!this.state.email.includes('@')){
          this.setState({emailError:'Enter the valid email'})
         }
         else if(this.state.password.length<8){
           this.setState({passwordError:'password length should be more than 8 character'})
         }
    }


    submithandler = (e)=>{
        if(this.valid())
        {
        alert(`${this.state.username} Registered Succesfully...`);
        console.warn(this.state);
        this.setState({
            firstName:'',
            lastName:'',
            username:'',
            email:'',
            password:''
        })
        e.preventDefault()
    }
    else{
        alert('Validation Error!!!')   
    }
}
    render(){
        return(
            <div className='signup'>
            <form onSubmit={this.submithandler}>
            <h1>User Registration...</h1><br></br><br></br>
            <input type="text" placeholder='firstName' value={this.state.firstName} onChange={this.firsthandler}></input><br></br>
            <p>{this.state.firstNameError}</p>
            <input type="text" placeholder='lastName' value={this.state.lastName}  onChange={this.lasthandler}></input><br></br>
            <p>{this.state.lastNameError}</p>
            <input type="text" placeholder='username' value={this.state.username} onChange={this.usernamehandler} ></input><br></br>
            <p>{this.state.usernameError}</p>
            <input type="text" placeholder='email' value={this.state.email} onChange={this.emailhandler}></input><br></br>
            <p>{this.state.emailError}</p>
            <input type="text" placeholder='password' value={this.state.password} onChange={this.passwordhandler}></input><br></br>
            <p>{this.state.passwordError}</p>
            <br></br>
            <input className='button' type='submit' value='Create Account'></input> 
            </form>       
            </div>
        )
    }
}
export default SignUp;