import { useState } from "react"
import styles from "./formEditor.module.css"
import { FieldTemplate } from "./fieldtemplate"

export const FormEditor = ({arr}) => {
    // const [statement, setStatement] = useState('')

    const [statement, setStatement] = useState(arr.reduce((acc, inputObj) => {
        switch(inputObj.type) {
            case "textInput":
                acc[inputObj.name] = ""
                break;
            case "multiInput":
                acc[inputObj.name] = []
                break;
            case "numberInput":
                    acc[inputObj.name] = ""
                break;
            case "passwordInput":
                    acc[inputObj.name] = ""
                break;
            case "areaInput":
                    acc[inputObj.name] = ""
                break;
            case "checkInput":
                    acc[inputObj.name] = false
                break;
            case "multiCheck":
                    acc[inputObj.name] = {}
                break;
            case "radioInput":
                    acc[inputObj.name] = false
                break;
            case "selectInput":
                    acc[inputObj.name] = {}
                break;
            case "multiSelect":
                    acc[inputObj.name] = {}
                break;
            case "keyValue":
                    acc[inputObj.name] = {}
                break;
            default:
                 break
        }
        return acc
    }, {}))


    const changeHandler = (inputState, inputName) => {  //main handler
        setStatement({...statement, [inputName] : inputState})
    }

    console.log(statement)

    const logInfo = () => { 
        console.log(statement)
    }
    
    return (    
        <div className={styles.editorBox}>  
         <button onClick={logInfo}>Вывести</button>
           {arr.map((el, i) => 
           <FieldTemplate 
                key={i.toString()} 
                data={el} 
                changeHandler={changeHandler} 
           />)}
        </div>
    )
}
