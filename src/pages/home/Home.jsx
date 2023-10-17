import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css'
 
// const arrLinks= [
//   "https://eb3k7ewioxo.exactdn.com/wp-content/uploads/2017/02/File_000-min-1-e1486234147726.jpeg?strip=all&lossy=1&resize=700,700&ssl=1",
//   "https://www.touropia.com/gfx/d/best-places-to-visit-in-india/rajasthan.jpg",
//   "https://eb3k7ewioxo.exactdn.com/wp-content/uploads/2017/02/Kolkata-scaled-e1609932814861.jpg?strip=all&lossy=1&ssl=1",
//   "https://eb3k7ewioxo.exactdn.com/wp-content/uploads/2017/02/Rishikesh-scaled-e1609928787831.jpg?strip=all&lossy=1&ssl=1",
//   "https://eb3k7ewioxo.exactdn.com/wp-content/uploads/2017/02/Bhopal-scaled-e1609873722273.jpg?strip=all&lossy=1&ssl=1",
//   "https://eb3k7ewioxo.exactdn.com/wp-content/uploads/2017/02/Amritsar-scaled-e1609929605388.jpg?strip=all&lossy=1&ssl=1"];

export default function Home(props) {
  return (
    <>
    <div className="headers">
    <Header/>
    </div>
    
    <div className='home'>
        
      <Posts arrLinks={props.arrLinks} arrDesc={props.arrDesc} arrLocat={props.arrLocat} arrPlace={props.arrPlace}/>
        <Sidebar/>
    
        
 
    </div>
  
    </>
    )
}
