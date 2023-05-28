import { useState} from 'react';

import Carousel from 'react-bootstrap/Carousel';


const Carrusel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return(
        <>
            <Carousel activeIndex={index} onSelect={handleSelect} className='shadow'>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../../src/imgs/pizza_c_1.png"
                    alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="../../src/imgs/pizza_c_2.png"
                    alt="Second slide"
                    />
                </Carousel.Item>

            </Carousel>
        </>
    );
}

export default Carrusel;