import { Parallax } from 'react-parallax';
import block from '../images/IMG_7777.jpg';

const ImageOne = () => (
    <Parallax className='image' bgImage={block} strength={800}>
        <div className='content'>
            <span className='img-txt'>The Movement for a Cul-De-Sac on the 1150 block of Lyman Ave.</span>
        </div>
    </Parallax>
);

export default ImageOne;