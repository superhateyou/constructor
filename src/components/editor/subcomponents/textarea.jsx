import { useState } from "react"

export const AreaInput = ({data, changeHandler}) => {
    const [inputState, setInputState] = useState('')
    const inputHandler = (e) => {
        setInputState(e.target.value)
    }

    const blurHandler = () => {
        changeHandler(inputState, data.name)
    }

    return <textarea name={data.name} 
        value={inputState} 
        placeholder={data.placeholder} 
        rows='10' 
        columns='1000' type='text' 
        key={data.key} 
        onBlur={e => blurHandler()}
        onInput={e => {inputHandler(e)}}> </textarea>
}