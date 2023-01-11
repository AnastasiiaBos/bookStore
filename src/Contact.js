import Slider from './Slider';
import { slider } from './data';

export default function Contact () {

    return (
        <div className="wrapperContact">
            <h3>We are waiting for you in {slider.length} of our Bookstores:</h3>
            <Slider slider={slider}/>
        </div>
    )
}