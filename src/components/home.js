import React from 'react';  
import './home.css';  // importing css file

class Home extends React.Component{  // using class component
constructor(){
    super()
    this.state={              
        photos:[]  // taking an empty array for  rendering photos
    }
}
componentDidMount(){
    console.warn('app mounted');            // using fetch method to call the api
    fetch('https://pixabay.com/api/?key=19039698-70d84fc349952a4a57cf2d93d&safesearch=true&per_page=200&page=3')
    .then(res => res.json())
              .then(data=> this.setState({ photos:data.hits }, () => console.log(data)));
}                          // state object updated and component will render
render(){
    const data = this.state.photos;
    return(
        <div className="photos-container">
        {
            data.map((item)=>{         
                return(   // displaying the photos using image tag
                <div className='photos'><img src={item.largeImageURL} alt='loading...' className='image'></img>
                <div className='details' ><p>views:{item.views} downloads:{item.downloads}</p></div>
                </div>         //   some details of photos
                )
            })
        }
        </div>
    );
}

} 
export default Home;  // exporting the component