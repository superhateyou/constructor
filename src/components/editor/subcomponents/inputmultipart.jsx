import { useState } from "react"

export const InputMultiPart = ({newName, newKey, newPlaceholder, changeHandler, blurHandler}) => {
    const [inputState, setInputState] = useState('')
    const inputHandler = (e) => {
        setInputState(e.target.value)
        changeHandler(e.target.value, e)
    }

    return <input 
        name={newName} 
        value={inputState} 
        placeholder = {newPlaceholder} 
        type='text' 
        key={newKey} 
        onBlur={e => {blurHandler(e)}}
        onInput={e => {inputHandler(e)}}/>
}