export const selectInput = ({data, changeHandler}) => {
    return <select name={data.name} placeholder={data.placeholder} type="number" key={data.key} onChange={e => {changeHandler(e)}}>
                {data.options.map(e=> <option value={e} key={data.key + e}>{e}</option>)}
            </select>
}