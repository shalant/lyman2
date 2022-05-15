import React from 'react';
// import './TextBoxCounter.css';

const TextBoxCounter = () => {
  return (
    <div className='text-box'>
        <header>
            <div className='container'>
                <h1>Animated Counter</h1>
                
            </div>
        </header>

        <section className='counters'>
            <div className='container'>
                <div>
                    <i className='fab fa-youtube fa-4x'></i>
                    <div className='counter' data-target='38000'>0</div>
                    <h3>Auto deaths this year</h3>
                </div>
                <div>
                    <i className='fab fa-twitter fa-4x'></i>
                    <div className='counter' data-target='15000'>0</div>
                    <h3>Auto deaths this year</h3>
                </div>
                <div>
                    <i className='fab fa-facebook fa-4x'></i>
                    <div className='counter' data-target='9000'>0</div>
                    <h3>Auto deaths this year</h3>
                </div>
                <div>
                    <i className='fab fa-linkedin fa-4x'></i>
                    <div className='counter' data-target='5000'>0</div>
                    <h3>Auto deaths this year</h3>
                </div>
            </div>
        </section>
        
        
    </div>
  )
}

export default TextBoxCounter;