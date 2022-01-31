import { useState } from "react/cjs/react.development"
import styles from './../formEditor.module.css'

export const MultiSelect = ({data, multiSelectHandler}) => {
    const [selected, setSelected] = useState()
    const selectHandler = (e) => {
        const updatedSelections = [...e.target.options]
      .filter(option => option.selected)
      .map(x => x.value);
        setSelected(updatedSelections)
        multiSelectHandler(selected, e)
    }

    // console.log(selected)

    return <select className={styles.multiSelect} name={data.name} multiple={true} key={data.key} onChange={e => {selectHandler(e)}}>
                {data.options.map(elem => <option value={elem} name={elem} key={data.key + elem}>
                    {elem}
                </option>)}
            </select>
}