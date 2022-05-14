import { Parallax } from 'react-parallax';
import kids3 from '../images/ben-wicks-iDCtsz-INHI-unsplash.jpg';

const ImageThree = () => (
    <Parallax className='image' bgImage={kids3} strength={800}>
        <div className='content'>
            <span className='img-txt'>a typical day</span>
        </div>
    </Parallax>
);

export default ImageThree;