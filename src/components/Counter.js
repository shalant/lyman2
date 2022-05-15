import React, { useState, useEffect } from 'react'

function Counter(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        count < props.number && setTimeout(
            () => setCount(count + 1), props.duration);
    }, [count]);

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`
    const timestamp = `${(current.getMonth() * 30.417) + current.getDate()}`
    const deathsToDate = timestamp * 104

  return (
    <>
      <h1>The current date is {date}</h1>
      <h1>The timestamp is {timestamp}</h1>
      <h1>The deathsToDate {deathsToDate}</h1>
    {props.label}: {count}
    </>
    
  )
}

export default Counter;