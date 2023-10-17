import "./topbar.css"
import { Link } from "react-router-dom";

export default function 
Topbar(props) {
  
  const user = props.user;

  const userLogin = (user) => {
          
          user =  false;
          console.log(user);
  }

  return (
    <div className='top'>
          <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>          
          <i className="topIcon fa-brands fa-square-twitter"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
          <i className="topIcon fa-brands fa-linkedin"></i>
          </div>
          <div className="topCenter">
            <ul className="topList">
             
              <ul className="topListItem">
              <Link className="link" to={"/"} >HOME</Link>
              </ul>
              <ul className="topListItem"> 
              <Link className="link" to={"/"} >ABOUT</Link>
              </ul>
              <ul className="topListItem">
               <Link className="link" to={"/"} >CONTACT</Link>
              </ul>
              <ul className="topListItem">
              <Link className="link" to={"/write"} >WRITE</Link>
              </ul>
              <ul className="topListItem">
              <Link  className="link" to={"/"} >
             
              {user && "LOGOUT"}</Link>
              
              
              </ul>
              
            </ul>
             
          </div>
          <div className="topRight">
           {
            user ? (
              <Link className="link" to={"/settings"} >
              <img
            className="topImg" 
            src={props.PPImg} 
            alt="." />
              </Link>
              
            ) : (
              <ul className="topList">
              <ul className="topListItem">
              <Link className="link" to={"/login"} >LOGIN</Link>
              </ul>
              <ul className="topListItem">
              <Link className="link" to={"/register"} >REGISTER</Link>
              </ul>
              </ul>
              
            )
           }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
          </div>
         
    </div>
  )
}
