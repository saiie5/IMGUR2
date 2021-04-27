import axios from 'axios'
import React,{useEffect,useState} from 'react'
import Search from '../components/search';
import Cards from '../components/cards';



function Home() {

    const [posts, setPosts]=useState([])
    var Data = [];
    const getdata = async () => {
        try {
            const userPosts = await axios.get("https://api.unsplash.com/photos/?client_id=ps57a3lUes7uSq4nAJ7L9YZ6aeotkFo1Wev37YIq3x0&query=cars")
          
          console.log(userPosts.data);
          setPosts(userPosts.data);
        
        } catch (err) {
          console.error(err.message);
        }
      };
      useEffect(()=>{
        getdata()
        const interval=setInterval(()=>{
            getdata()
           },10000)
             
             
           return()=>clearInterval(interval)
    },[])

  return (
    <div className="App">
        
        <Search></Search>
        {/* <Body></Body> */}
        <div className="container-fluid tm-container-content tm-mt-60">
        <div className="row tm-mb-90 tm-gallery">
            {posts.map(item => {
                console.log(item.id);
                return (
                    <Cards 
                    alt_description = {item.alt_description}
                    urls = {item.urls.regular}
                    likes = {item.likes}
                    author = {item.user.first_name+' '+item.user.last_name}
                    />
                 
                )   
            })}      
         </div> 
     </div>

    </div>
  );
}

export default Home  
