export const areaInput = ({data, changeHandler}) => {
    return <textarea name={data.name} placeholder={data.placeholder} rows='10' columns='1000' type='text' key={data.key} onChange={e => {changeHandler(e)}}> </textarea>
}