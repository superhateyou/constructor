import { MultiCheckConstructor } from "./checkmulti_constructor"

export const multiCheck = ({data, multiCheckHandler}) => {
    return (
        <MultiCheckConstructor data={data} multiCheckHandler={multiCheckHandler}/>
    )
}