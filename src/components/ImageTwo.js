import { Parallax } from 'react-parallax';
import kids2 from '../images/IMG_7338.JPG';

const ImageTwo = () => (
    <Parallax className='image' bgImage={kids2} strength={800}>
        <div className='content'>
            <span className='img-txt'>a typical day</span>
        </div>
    </Parallax>
);

export default ImageTwo;