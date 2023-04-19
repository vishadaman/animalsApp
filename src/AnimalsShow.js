import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap = {
    bird,
    cow,
    cat,
    dog,
    gator,
    horse
}

function AnimalShow({type}) {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    }
    return <>
        <div >
            <img src={svgMap[type]} width={"80px"} height={"80px"} alt='img'/>
            <div onClick={handleClick}>
                <img src={heart} alt='img' style={{
                    width: 20 + 10 * clicks + 'px',
                    cursor: 'pointer',
                }} />
            </div>
        </div>
    </>
}

export default AnimalShow;