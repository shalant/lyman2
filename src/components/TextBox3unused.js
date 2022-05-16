import React from 'react';
import Counter from './Counter.js';

const TextBox3 = () => {
    const deathsPerYear = 38000;
    const deathsPerSec = deathsPerYear / 365 / 24 / 60 / 60;
    const today = new Date();
    const beginningOfYear = new Date(today.getFullYear(), 0, 0);
    const secondsThisYear = Math.ceil((today.getTime() - beginningOfYear.getTime()) / 1000);

  return (
    <div>
        <Counter
            classname='counter' 
            label="Automobile Deaths year-to-date" 
            number={secondsThisYear * deathsPerSec}
            duration="1000"
            increment={deathsPerSec}
        />
    </div>
  )
}

export default TextBox3