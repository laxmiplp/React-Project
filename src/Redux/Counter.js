import React from "react"
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (


        <>
            <h1>Counter: {counter}</h1>

            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </>
    )
}
export default Counter