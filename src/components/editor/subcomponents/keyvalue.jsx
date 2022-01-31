import { useState } from 'react'
import styles from './../formEditor.module.css'

export const KeyValue = ({data, changeHandler}) => {
    const [keyValueState, setKeyValueState] = useState('')

    const valueHandler = (e) => {
        setKeyValueState({...keyValueState, [e.target.name] : e.target.value})
    }

    const blurHandler = () => {
        changeHandler(keyValueState, data.name)
    }

    return (
        <div>
            {<select name={data.name+'Select'} 
                    className={styles.keyValue} 
                    onBlur={e => blurHandler()}
                    onChange={e => {valueHandler(e)}}> 
                        {data.options.map(x => 
                            <option key={data.name+x} 
                                value={x}>{x}
                            </option>)}
                    </select>}
            {<input name={data.name+'Input'} 
                    onBlur={e => blurHandler()}
                    onChange={e => {valueHandler(e)}} 
                    type="text" 
                    placeholder={data.placeholder} 
                    className={styles.keyValueText} />}
        </div>
    )
}