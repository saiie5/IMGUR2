import React from 'react'  
import{BrowserRouter as Router,Link,Route} from 'react-router-dom';  // importing routing package
import Home from './home';
import NewPost from './newPost';
import Search from './search';          // importing the components
import SignIn from './signIn';
import SignUp from './signUp';
import{Navbar,Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'    // importing font awsome icon package
import { faHome,faUpload,faSearch} from '@fortawesome/free-solid-svg-icons'
import './navbar.css';


function NavbarImgur(){   // using functional component
    return(
        <div className='navbar'>
        <Router>                  {/*creating link for the components*/}
        <Navbar bg="light" expand="lg">
      { /* <Navbar.Brand href="#home">imgur</Navbar.Brand> */ }
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Navbar.Brand href="#home"><h3>imgur</h3></Navbar.Brand>
            <Nav.Link className='nav' href="#home"><Link to = '/'><FontAwesomeIcon icon = {faHome} color='black'/>Home</Link></Nav.Link>
            <Nav.Link className='nav' href="#upload"><Link to = '/upload'> <FontAwesomeIcon icon = {faUpload} color='black'/>Upload</Link></Nav.Link>
            <Nav.Link className='nav' href="#search"><Link to = '/search'><FontAwesomeIcon icon = {faSearch} color='black'/>Search</Link></Nav.Link>
            <Nav.Link className='nav' href="#signIn"><Link to = '/signIn'>SignIn</Link></Nav.Link>
            <Nav.Link className='nav' href="#signUP"><Link to = '/signUp'>SignUp</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        {/*defining the routes*/} 
        <Route exact path = '/' component = {Home}></Route>
        <Route path = '/upload' component = {NewPost}></Route>
        <Route path = '/search' component = {Search}></Route>
        <Route path = '/signIn' component = {SignIn}></Route>
        <Route path = '/signUp' component = {SignUp}></Route>
        
        </Router>
        
        </div>
    )
}
export default NavbarImgur; // exporting the component