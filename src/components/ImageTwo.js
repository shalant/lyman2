import { Parallax } from 'react-parallax';
import kids2 from '../images/lymanpic.jpg';
import Counter from './Counter';


const deathsPerYear = 38000;
const deathsPerSec = deathsPerYear / 365 / 24 / 60 / 60;
const today = new Date();
const beginningOfYear = new Date(today.getFullYear(), 0, 0);
const secondsThisYear = Math.ceil((today.getTime() - beginningOfYear.getTime()) / 1000);


const ImageTwo = () => (
    


    <Parallax className='image' bgImage={kids2} strength={800}>
        <div className='content'>
            <span className='img-txt'>
            <Counter
            classname='counter' 
            label="Automobile Deaths year-to-date" 
            number={secondsThisYear * deathsPerSec}
            duration="1000"
            increment={deathsPerSec}
        />
            </span>
        </div>
    </Parallax>
);

export default ImageTwo;