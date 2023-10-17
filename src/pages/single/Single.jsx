import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar.jsx"
import SinglePost from "../../components/singlePost/SinglePost"
import {postNum} from "../../components/post/Post";

export default function Single(props) {
  return (
    <div className="single">
       <SinglePost linkPass={props.arrLinks[postNum-1]}  />
      {/* <h1>{}</h1>  */}
      {/* {console.log(postNum)} */}
       <Sidebar/>
    </div>
  )
}
