import { Parallax } from 'react-parallax';
import block from '../images/kenny-eliason-iPgQJEcGoE0-unsplash.jpg';

const ImageOne = () => (
    <Parallax className='image' bgImage={block} strength={800}>
        <div className='content'>
            <span className='img-txt'>a typical day</span>
        </div>
    </Parallax>
);

export default ImageOne;