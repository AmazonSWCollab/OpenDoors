import CarlsJr from "../assets/reviewPage/carlsjr.jpg";
import '../App.css';

export default function ReviewPage() {
    const background = {
        backgroundImage: 'url(${CarlsJr})',
    };
    return (
        <div>
            <div style = {background}>
                <img className="" src={CarlsJr}/>
            </div>
            <p>test</p>
        </div>
    )
};