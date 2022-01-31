import { CheckInput } from './subcomponents/checkbox'
import { MultiCheck } from './subcomponents/checkmulti'
import { TextInput } from './subcomponents/input'         
import { MultiInput } from './subcomponents/inputmulti'
import { NumberInput } from './subcomponents/number'        
import { PasswordInput } from './subcomponents/password'    
import { AreaInput } from './subcomponents/textarea'      
import { RadioInput } from './subcomponents/radio'
import { SelectInput } from './subcomponents/select'
import { MultiSelect } from './subcomponents/multi_select'
import { KeyValue } from './subcomponents/keyvalue'

const keyHolder = {
    "textInput" : TextInput,
    "numberInput" : NumberInput,
    "passwordInput" : PasswordInput,
    "areaInput" : AreaInput,
    "checkInput" : CheckInput,
    "multiInput" : MultiInput,
    "multiCheck" : MultiCheck,
    "radioInput" : RadioInput,
    "selectInput" : SelectInput,
    "multiSelect" : MultiSelect,
    "keyValue" : KeyValue
}

export const FieldTemplate = ({data, changeHandler}) => {
    for (const key in keyHolder) {
        if (key === data.type){
            const ComponentName = keyHolder[key]
            return (
                <ComponentName data={data} 
                    changeHandler={changeHandler} 
                />
            )
        }
    }
    return null
}