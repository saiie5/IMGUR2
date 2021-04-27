// import './App.css';

function Footer() {
  return (
    // <div className="App">
    //   <header className="App-header">
    <footer className="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
    <div className="container-fluid tm-container-small">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-12 px-5 mb-5">
                <h3 className="tm-text-primary mb-4 tm-footer-title">About imgur</h3>
                <p align="justify">Imgur is the easiest way to discover and enjoy the magic of the Internet. It’s where you’ll find the funniest, most informative and inspiring images, memes, GIFs, and visual stories served up in an endless stream of bite-sized fun. Powered by a passionate community of people from all around the world, anyone can join to share cool stuff and vote the best to the top.

You’ll always find something on Imgur to make you smile and brighten your day.</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                <h3 className="tm-text-primary mb-4 tm-footer-title">Our Links</h3>
                <ul className="tm-footer-links pl-0">
                    <li><a href="#">Advertise</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Our Company</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                <ul className="tm-social-links d-flex justify-content-end pl-0 mb-5">
                    <li className="mb-2"><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>
                    <li className="mb-2"><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
                    <li className="mb-2"><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
                    <li className="mb-2"><a href="https://pinterest.com"><i className="fab fa-pinterest"></i></a></li>
                </ul>
                <a href="#" className="tm-text-gray text-right d-block mb-2">Terms of Use</a>
                <a href="#" className="tm-text-gray text-right d-block">Privacy Policy</a>
            </div>
        </div>
        <div class="row">
                <div class="col-lg-8 col-md-7 col-12 px-5 mb-3">
                    Copyright 2020 Imgur. All rights reserved.
                </div>
            
            </div>
        </div>
    </footer>
  );
}

export default Footer;
