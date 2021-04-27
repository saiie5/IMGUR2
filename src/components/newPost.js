import React from 'react';
import './newPost.css';

class NewPost extends React.Component{
    uploadPhoto(e){
        console.warn(e.target.files);
        const files = e.target.files;
        const formData = new FormData();
        formData.append('img' , files[0]);
        fetch('http://127.0.0.1:8000/image/upload', {method:"POST" , body:formData})
        .then((res)=>{
            res.json()
            .then((result)=>{
                console.warn('result',result);
            })
        })
    }
    render(){
        return(
            <div className='newpost'>
            <h2>Hello!!!</h2><br></br>
            <h2> Upload your images here...</h2><br></br><br></br>
            <input type = 'file' name = 'img' onChange= {(e)=>{this.uploadPhoto(e)}}></input>
            </div>
        )
    }
}
export default NewPost;