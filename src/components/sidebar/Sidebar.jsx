import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
         <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img 
            className="sidebarTitleImg"
            src="https://imgs.search.brave.com/wK5HTJRIjSGxIdNJkqXBh0L4RW2g-VaKdtvVY-_VVpk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBjL2Jj/LzgyLzBjYmM4Mjk0/ZDc1Y2NiNzIwNTFl/MzU2N2E0Y2U5ZDU0/LmpwZw" 
            alt="" /> 
            <p>Meet Shifali, a passionate explorer and storyteller who takes you on captivating adventures through her blog. She's not just a traveler; she's a cultural enthusiast, an eloquent writer, and a talented photographer. Her blog is a window into the world, where she brings distant places to life with her words and images. Join Shifali as she shares her wanderlust and the beauty of the world through her unique perspective.
            </p>
            
         </div>
        
         <div className="sidebarItem">
         <span className="sidebarTitle">CATEGORIES</span>
               <ul className="sidebarList">
                  <li className="sidebarListItem">Life</li>
                  <li className="sidebarListItem">Music</li>
                  <li className="sidebarListItem">Style</li>
                  <li className="sidebarListItem">Tech</li>
                  <li className="sidebarListItem">Sport</li>
                  <li className="sidebarListItem">Cinema</li>
                  </ul>  
                
            </div>
            
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    FOLLOW US
                </span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>          
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
                
                </div>
            </div>
          </div>

         
    
  )
}
