import { useState } from "react"

export const NumberInput = ({data, changeHandler}) => {
    const [inputState, setInputState] = useState('')
    const inputHandler = (e) => {
        setInputState(e.target.value)
    }

    const blurHandler = () => {
        changeHandler(inputState, data.name)
    }

    return <input name={data.name} 
        value={inputState}
        placeholder={data.placeholder} 
        type="number" 
        key={data.key} 
        onBlur={e => blurHandler()}
        onInput={e => {inputHandler(e)}}/>
}