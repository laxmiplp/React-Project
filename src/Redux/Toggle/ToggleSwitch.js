import React from 'react';
import { useDispatch, useSelector } from "react-redux"

const ToggleSwitch = () => {
    const isOn = useSelector((state) => state.isOn)
    const dispatch = useDispatch()
    const toggleSwitch = () => {
        dispatch({ type: 'TOGGLE_SWITCH' })
        console.log("click")
    }
    return (
        <>
            <h1>{isOn ? 'ON' : 'OFF'} </h1>
            <button onClick={toggleSwitch}>Toggle</button>
        </>
    )
}
export default ToggleSwitch