export const passwordInput = ({data, changeHandler}) => {
    return <input name={data.name} placeholder={data.placeholder} type="password" autoComplete="off" key={data.key} onChange={e => {changeHandler(e)}}/>
}