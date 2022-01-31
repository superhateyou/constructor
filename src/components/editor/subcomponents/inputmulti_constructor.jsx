import { useState } from "react"

export const MultiInputConstructor = ({data, multiInputHandler}) => {
    let tempArr = []

    const [lengthArr, setLengthArr] = useState(data.quantity)
    const [localState, setLocalState] = useState('')
    const addField = () => {
        setLengthArr(lengthArr + 1)
    }

    const localHandler = (e) => {
        setLocalState({...localState, [e.target.name] : e.target.value})
        multiInputHandler(localState, e)
    }

    const renderField = () => {
        if (data.quantity > 0){
            for (let i = 0; i < lengthArr; i++){
                let currentName = data.name + '_' + i
                let currentKey = data.name + '_' + i + '_' + data.type
                tempArr.push(
                    <input 
                        alt={data.name} 
                        name={currentName} 
                        placeholder={data.placeholder} 
                        type='text' key={currentKey} 
                        onChange={e => {localHandler(e)}}
                    />)
            }
        }
        return tempArr
    }
  
    return (
        <div>
            {renderField()}
            <button key={data.name + '+' + data.type + '_addButton'} 
                type='button' 
                onClick={addField}>
                Добавить поле ввода
            </button>
        </div>
    )
}