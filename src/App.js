import Topbar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  let user = true;
  const PPImg = "https://imgs.search.brave.com/wK5HTJRIjSGxIdNJkqXBh0L4RW2g-VaKdtvVY-_VVpk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBjL2Jj/LzgyLzBjYmM4Mjk0/ZDc1Y2NiNzIwNTFl/MzU2N2E0Y2U5ZDU0/LmpwZw";

  const arrLinks= [
    "https://eb3k7ewioxo.exactdn.com/wp-content/uploads/2017/02/IMG_4111-min-e1486232828743.jpg?strip=all&lossy=1&ssl=1",
    "https://eb3k7ewioxo.exactdn.com/wp-content/uploads/2021/05/Varanasi.jpg?strip=all&lossy=1&ssl=1",
    "https://eb3k7ewioxo.exactdn.com/wp-content/uploads/2017/02/Kolkata-scaled-e1609932814861.jpg?strip=all&lossy=1&ssl=1",
    "https://eb3k7ewioxo.exactdn.com/wp-content/uploads/2017/02/Rishikesh-scaled-e1609928787831.jpg?strip=all&lossy=1&ssl=1",
    "https://eb3k7ewioxo.exactdn.com/wp-content/uploads/2017/02/Bhopal-scaled-e1609873722273.jpg?strip=all&lossy=1&ssl=1",
    "https://eb3k7ewioxo.exactdn.com/wp-content/uploads/2017/02/Amritsar-scaled-e1609929605388.jpg?strip=all&lossy=1&ssl=1"];

  const arrLocat=[
    [`Satpura National Park and Pachmarhi`,`(Madhya Pradesh)`],
    [`Varanasi`,`(Uttar Pradesh)`],
    [`Kolkata`,`(West Bengal)`],
    [`Rishikesh`,`(Uttarakhand)`],
    [`Bhopal`,`(Madhya Pradesh)`],
    [`Amritsar`,`(Punjab)`]


  ];
  
  const arrPlace=[
  `Satpura National Park`,
  `Varanasi is the ultimate among the tourist places in India`,
  `Kolkata is one of the best places to visit in India`,
  `Rishikesh is becoming one of the most popular places to visit in India`,
  `Lesser known, Bhopal is an interesting place to visit`,
  `The Golden Temple of Amritsar is a must see`
  ];


  const arrDesc=[
    `With their incredible wildlife, Satpura National Park and the Satpura Tiger Reserve are amongh the best places to visit in India and a good reason to visit Madhya Pradesh. They are home to spotted dears, sloth bears, various species of monkeys, buffalos, birds and snakes, and more importantly they are among the top places to visit in India to spot leopards and tigers.

    It is said that over 40 tigers live in the reserve, but they are not easy to see and sure enough seeing one requires several tries, at various times of day. The best season to see them is apparently during the monsoon, when they hang out in the water.
    
    Pachmarhi is one of the most popular hill stations in India, and an incredibly pleasant place thanks to the mild weather and peaceful atmosphere. 
    
    Aside from the Satpura National Park and Tiger Reserve, other places of interest in the area are the Rajat Prapat Waterfall and the viewpoint of Chauragarh, where the Mahadeo Cave is the starting point to a great hiking trail.`,

    `You simply can’t go to India and skip Varanasi. Yes, it is intense, it is somewhat shocking, but this really should be on the top of your list of places to visit. It’s the cradle of the Hindu religion, the holy city. Chaotic yet peaceful, noisy yet quiet, it has everything one may possibly love and at the same time hate about India.

    Varanasi is packed with interesting things to see and do – making it one of the most beautiful places to visit in India. The Old City is a maze of beautifully intricate narrow alleys, where you will also find the Ghats – literally steps that lead into the river. You should also make it a point to experience the Ganga Aarti, the ceremony during which fire is donated to the Mother Ganges. It takes place every day, right after sunset, at Dashashwamedh Ghat, and it attracts a multitude of people – international tourists, Indian tourists and locals.
    
    Another thing you should do is a sunrise tour of the city. A sunrise boat tour such as this one is a great way to observe all the rituals as well as the daily life that takes place along the river: people cleansing their sins in the Ganges; the cremations (which, by the way, can’t be photographed); people doing laundry; the buffaloes being washed; barbers shaving their customers; children playing; dogs enjoying a bit of shade; and cows chewing everything in sight.
    
    When in Varanasi, make it a point to try Lassi – a yogurt drink which is a specialty in India. The best place for that is Bana Lassi, in the old town. Blue Lassi is a small “hole in the wall” (which however has a few seatings at the rear) where you can try the Bhang Lassi. Bhang is an extract which is made of the flower heads and leaves of cannabis and which is added to the lassi, with the obvious effect of making those who taste it high (and it is completely legal!).`,

    "Packed with examples of British colonial architecture, Kolkata remains one of the best places to visit in India. The third largest city in India is home to the Victoria Memorial, where you will find an interesting museum; and of Park Street, where you won’t have trouble finding a good restaurant and a shop catering to your needs. Kolkata is one of the most difficult cities in India, much like Mumbai it’s a place of contrasts. Catholics around the world know Kolkata for being the city of Mother Teresa, Nobel Peace Price in 1979 and now a saint, known for her relentless work to help the most marginalized people in the city.",

    "Located on the banks of the Ganges River, on foothills of the Himalaya, Rishikesh is slightly more off the beaten path compared to other places in the country, though it was quite a popular destination for international tourists after the Beatles went on a yoga retreat in now abandoned Maharishi Mahesh. To date, the city is a favorite of yogis. The main attractions are its temples and the two suspension bridges.",

    `Hardly considered one of the best places to visit in India, Bhopal – one of the main cities of Madhya Pradesh – will prove to be a good place to explore and, more than anything else, to get to know India without any of the strong cultural shock other places in the country may provide, as it is significantly less crowded.

    Bhopal is sadly famous for the Bhopal Disaster, an incident which occurred in 1984 and caused the death of thousands of people as a consequence of the gas leakage from the Union Carbide India Limited (UCIL) pesticide plant. Observation tours of the Gas Tragedy are a good way to learn a bit more about the history of the city – though hardly a classic. 
    
    A good 40% of the population of Bhopal is Muslim. This means that the city is packed with mosques (mostly concentrated in the northern side of the city), the most important being the Taj-ul-Masjid, started in 1877 with the intention of building the largest mosque in the world.
    
    Other attractions are the Tribal Museum, dedicated to the seven tribes of Madhya Pradesh; the State Museum, which is an archeological museum; and the two lakes which provide a pleasant place for a walk.`,

    `Known as the “Jewel of Punjab,” Amritsar is famous for its beautiful, Golden Temple (Sri Harmandir Sahib), one of the holiest temples (Gurdwara) for the Sikhs and a popular pilgrimage site for Sikhism. As you can make out from the name, the temple is plated in gold – this was done in the 19th century, though the temple was actually built in the 16th century.

    The Golden Temple has the largest kitchen in the world, where day in day out volunteers cook tirelessly for 100000 people, trying to prove that despite caste and religion people can sit together and eat. `];

  return (
    <Router>
     <Topbar PPImg={PPImg} user = {user}/>
     <Routes>
       <Route path="/" 
       element={
        <Home arrLinks={arrLinks} arrDesc={arrDesc} arrLocat={arrLocat} arrPlace={arrPlace}/>
       }>
       </Route>
       <Route path="/register" 
       element=
        {user ? <Home arrLinks={arrLinks} arrDesc={arrDesc} arrLocat={arrLocat} arrPlace={arrPlace}/> : <Register/>}
       >
       </Route>
       
       <Route path="/login" 
       element={user ? (<Home arrLinks={arrLinks} arrDesc={arrDesc} arrLocat={arrLocat} arrPlace={arrPlace}/>) : <Login/>}>
       </Route>

       <Route path="/write" 
       element={user ? <Write/> : <Register/>}>
       </Route>

       <Route path="/settings" 
       element={user ? <Settings PPImg={PPImg} /> : <Register/>}>
       </Route>

       <Route path="/post/:postId" 
       element={
        <Single arrLinks={arrLinks} />
       }>
       </Route>

     </Routes>
    </Router>
    );
}

export default App;
