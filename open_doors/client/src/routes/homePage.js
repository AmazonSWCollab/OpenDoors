import '../App.css';

import homeImage from '../assets/homePage/Grandma and Child.png';

export default function Home() {
    return(
        <div>
            <h1 id="OD-title">OpenDoors</h1>
            <p id="OD-phrase">Opening Doors for Equal Accessibility</p>
            <img src={homeImage} id="OD-Home-photo" alt=""></img>

            <p id="about-us">
                More than 86.3 million Americans are disabled (CDC 2022).
                Even with the implementation of the Americans with Disabilities Act (ADA) in 1990, approximately 30%
                of American businesses and public spaces remain non-accommodating to those with disabilities (IAMV 2020).
                Additionally, our research survey of 11 local disabled folks indicated in their interviews that they all
                experienced difficulty navigating public spaces independently. OpenDoors aims to create a nationwide
                disabled-led review site for ADA compliance of local businesses. By crowdsourcing reviews from
                disabled individuals, we will create a thorough ADA access guide for the disabled.
                OpenDoors also accommodates both visible and invisible disabilities with its reviews.
                OpenDoors' reviews will also ensure businesses are held accountable for being accessible for our
                entire disabled community, as is mandated by law. OpenDoors aims to empower disabled voices,
                encourage public spaces and businesses to improve accessibility, and foster a more inclusive society.
        </p>
        <br></br>

            <div id="fillerSpace"></div>

        </div>

    )
}
