import { useState } from "react"

export const SelectInput = ({data, changeHandler}) => {
    const [inputState, setInputState] = useState('')
    const inputHandler = (e) => {
        setInputState(e.target.value)
    }
    
    const blurHandler = () => {
        changeHandler(inputState, data.name)
    }

    return <select name={data.name} 
        key={data.key} 
        onBlur={e => blurHandler()}
        onChange={e => {inputHandler(e)}}>
            {data.options.map(e=> 
            <option value={e} 
            key={data.key + e}>{e}
            </option>)}
            </select>
}