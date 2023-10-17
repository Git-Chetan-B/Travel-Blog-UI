import {Post} from "../post/Post";
import "./posts.css";

export default function Posts(props) { 
   let i = 0;

 
  return ( 
    <div className="posts">

    
    <Post link={props.arrLinks[0]} postId={1} arrDesc={props.arrDesc[0]} arrLocat={props.arrLocat[0]} arrPlace={props.arrPlace[i++]}/>
    <Post link={props.arrLinks[1]} postId={2} arrDesc={props.arrDesc[1]} arrLocat={props.arrLocat[1]} arrPlace={props.arrPlace[i++]}/> 
    
    <Post link={props.arrLinks[2]} postId={3} arrDesc={props.arrDesc[2]} arrLocat={props.arrLocat[2]} arrPlace={props.arrPlace[i++]}/>
    <Post link={props.arrLinks[3]} postId={4} arrDesc={props.arrDesc[3]} arrLocat={props.arrLocat[3]} arrPlace={props.arrPlace[i++]}/>
    <Post link={props.arrLinks[4]} postId={5} arrDesc={props.arrDesc[4]} arrLocat={props.arrLocat[4]} arrPlace={props.arrPlace[i++]}/>
    <Post link={props.arrLinks[5]} postId={6} arrDesc={props.arrDesc[5]} arrLocat={props.arrLocat[5]} arrPlace={props.arrPlace[i++]}/>
    
    </div>
  )
}


