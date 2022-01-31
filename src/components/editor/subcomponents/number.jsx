export const numberInput = ({data, changeHandler}) => {
    return <input name={data.name} placeholder={data.placeholder} type="number" key={data.key} onChange={e => {changeHandler(e)}}/>
}