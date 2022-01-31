export const checkInput = ({data, checkedHandler}) => {
    return <input name={data.name} type='checkbox' key={data.key} onChange={e => {checkedHandler(e)}}/>
}