import { useState } from "react"
import { InputMultiPart } from "./inputmultipart"

export const MultiInput = ({data, changeHandler}) => {
    let tempArr = []

    const [lengthArr, setLengthArr] = useState(data.quantity)
    const [inputState, setInputState] = useState('')
    const addField = () => {
        setLengthArr(lengthArr + 1)
    }
    
    const inputHandler = (miniInputState, e) => {
        setInputState({...inputState, [e.target.name] : miniInputState})  
        // setTimeout(changeHandler(Object.values(inputState), data.name))
    }

    const blurHandler = () => {
        changeHandler(Object.values(inputState), data.name)
    }

    const renderField = () => {
        if (data.quantity > 0){
            for (let i = 0; i < lengthArr; i++){
                let currentName = data.name + '_' + i
                let currentKey = data.name + '_' + i + '_' + data.type
                tempArr.push(
                    <InputMultiPart 
                        newName={currentName} 
                        key={currentKey+currentName}
                        newKey={currentKey} 
                        newPlaceholder={data.placeholder}
                        blurHandler={blurHandler}
                        changeHandler={inputHandler}/>
                    )
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