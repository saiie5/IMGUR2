// import './App.css';

function Header() {
  return (
    // <div className="App">
    //   <header className="App-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <i className="fas fa-film mr-2"></i>
                Imgur
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link nav-link-1 active" aria-current="page" href="#">Go Ad-free</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-link-2" href="/newPOST">New Post</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-link-3" href="/signIN">SignIn</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-link-4" href="/signUP">SignUp</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  );
}

export default Header;
