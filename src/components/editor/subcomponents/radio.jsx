export const radioInput = ({data, checkedHandler}) => {
    return <input name={data.name} type='radio' value={data.value} key={data.key} onChange={e => {checkedHandler(e)}}/>
}