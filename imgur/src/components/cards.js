// import './App.css';
// import img12 from '../img-08.jpg';

export default function Cards(props) {
            return <>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                <a href={props.urls}><img alt="stack overflow" alt={props.alt_description} src={props.urls}></img></a>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>{props.alt_description}</h2>
                        <a href={props.urls}>View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">By. {props.author}</span>
                    <span>{props.likes} Likes</span>
                </div>
            </div>
        </>
    }


