import React, { useState } from 'react';  // useState to sync our input and state
import './search.css';  // importing css

function Search(){
    const[value,setValue]=useState('')     // useing hooks to create hooks
    const [results,setResults]=useState([])   // creating an empty array for rendering the search photos
    const fetchImage=()=>{                 
        fetch(`https://api.unsplash.com/search/photos?client_id=imvgIt3fM-9PrKKFn0p7g2Y4O5O5ZCj8jzhFuEc5XDM&per_page=100&query=${value}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setResults(data.results)       
        });
    }
        return(
            <div className='search'>
            <div className='search-bar'>                                    {/*updating the value*/}
            <input type='text' value={value} placeholder='Search' onChange={(e)=>{setValue(e.target.value)}}></input>
            <button onClick={()=>{fetchImage()}}>Send</button>
            </div>  
            <div className='gallery'>
            { 
                results.map((item)=>{ // iterating the array to display the photos
                    return(
                        <div className='photos'><img src={item.urls.regular} alt='loading...'></img>
                       <div className='details'><p>Likes:{item.likes}</p></div> 
                        </div>
                    )
                })
                
            } </div>
            </div>
        )
}
export default Search;