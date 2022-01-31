import { useState } from "react"

export const PasswordInput = ({data, changeHandler}) => {
    const [inputState, setInputState] = useState('')
    const inputHandler = (e) => {
        setInputState(e.target.value)
    }

    const blurHandler = () => {
        changeHandler(inputState, data.name)
    }

    return <input name={data.name} 
        placeholder={data.placeholder} 
        value={inputState} 
        type="password" 
        autoComplete="off" 
        key={data.key} 
        onBlur={e => blurHandler()}
        onInput={e => {inputHandler(e)}}/>
}