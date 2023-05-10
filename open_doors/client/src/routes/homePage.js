import '../App.css';

import homeImage from '../assets/homePage/Grandma and Child.png';

export default function Home() {
    return(
        <div>
            <h1 id="OD-title">OpenDoors</h1>
            <p id="OD-phrase">Opening Doors for Equal Accessibility</p>
            <img src={homeImage} id="OD-Home-photo" alt=""></img>
        
            <div id="fillerSpace"></div>
        </div>
    )
}