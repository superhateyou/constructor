import { useState } from "react"

export const CheckInput = ({data, changeHandler}) => {
    const [inputState, setInputState] = useState(false)
    const inputHandler = (e) => {
        setInputState(e.target.checked)
    }

    const blurHandler = () => {
        changeHandler(inputState, data.name)
    }

    return <input name={data.name} 
    type='checkbox' 
    key={data.key} 
    checked={inputState}
    onBlur={e => blurHandler()}
    onChange={e => {inputHandler(e)}}/>
}