import { useState } from 'react'

export const ComponentCounter = () => {


    const [counter,setCounter] = useState<number>(0)

    const incrementCounter = ()=> {
        setCounter((prev)=> prev+1)
    }
    const decrementCounter = ()=> {
        setCounter((prev)=> prev-1)
    }


  return (
    <div>
        <h2>valor de counter: {counter}</h2>

        <button onClick={incrementCounter}>mandale mecha</button>
        <button onClick={decrementCounter}>apaga la mecha</button>
    </div>
  )
}
