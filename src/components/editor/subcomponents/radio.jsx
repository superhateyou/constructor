import { useState } from "react"

export const RadioInput = ({data, changeHandler}) => {
    const [inputState, setInputState] = useState(false)
    const inputHandler = (e) => {
        setInputState(e.target.checked)
    }

    const blurHandler = () => {
        changeHandler(inputState, data.name)
    }
    
    return <input name={data.name} 
        type='radio' 
        checked={inputState} 
        key={data.key} 
        onBlur={e => blurHandler()}
        onChange={e => {inputHandler(e)}}/>
}