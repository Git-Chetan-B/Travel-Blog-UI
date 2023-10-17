import "./post.css"
import { Link } from "react-router-dom"

let postNum ; 
const postNumFunc = (post) =>{
    
     postNum =  post;
}
 
// console.log("post.jsx Out Func "+postNum);
function Post(props) {

    
    

    

  return (
    <div className="post">
    
        <img 
        className="postImg"
        src={props.link} 
        alt="" />

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">{props.arrLocat[0]}</span>
                <span className="postCat">{props.arrLocat[1]}</span>
            
            </div>
 
           <span className="postTitle">
           <Link onClick={() => postNumFunc(props.postId)} className="link" to={`/post/:${props.postId}`} >
           {props.arrPlace}
           </Link>
           </span>
           
            
           

            <hr />
            <span className="postDate">
                1 hour ago
            </span>
        </div>

        <p className="postDesc">
            {props.arrDesc}

        </p>
    </div>
  )
}



export {Post, postNum};
