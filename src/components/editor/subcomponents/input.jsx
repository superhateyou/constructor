export const textInput = ({data, changeHandler}) => {
    return <input name={data.name} placeholder={data.placeholder} type='text' key={data.key} onChange={e => {changeHandler(e)}}/>
}