import "./singlePost.css"

export default function SinglePost(props) {
  return (
    <div className="singlePost"> <div className="singlePostwrapper">
        <img 
        className="singlePostImg"
        src={props.linkPass} 
        alt="" />

        

        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>

        </h1>

        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Shifali</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla nobis, quisquam blanditiis ipsa perferendis sint optio rerum facere mollitia quia velit. Dolore amet asperiores labore minus iure maxime eum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla nobis, quisquam blanditiis ipsa perferendis sint optio rerum facere mollitia quia velit. Dolore amet asperiores labore minus iure maxime eum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla nobis, quisquam blanditiis ipsa perferendis sint optio rerum facere mollitia quia velit. Dolore amet asperiores labore minus iure maxime eum officiis!Lorem  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi quam incidunt iusto placeat culpa maiores inventore possimus error assumenda nobis sint cupiditate eaque praesentium, exercitationem totam molestiae provident illo adipisci!</p>
    </div>
    </div>
  )
}
