import styles from './../formEditor.module.css'
import { useState } from 'react'

export const MultiSelect = ({data, changeHandler}) => {
    const [selectedFields, setSelectedFields] = useState('')
    const selectHandler = (e) => {
        const updatedSelections = [...e.target.options]
      .filter(option => option.selected)
      .map(x => x.value);
        setSelectedFields(updatedSelections)
    }

    const blurHandler = () => {
        changeHandler(selectedFields, data.name)
    }

    return <select className={styles.multiSelect} 
        name={data.name} 
        multiple={true} 
        key={data.key} 
        onBlur={e => blurHandler()}
        onChange={e => {selectHandler(e)}}>
            {data.options.map(elem => 
            <option value={elem} 
            name={elem} 
            key={data.key + elem}>
                {elem}
            </option>)}
            </select>
}