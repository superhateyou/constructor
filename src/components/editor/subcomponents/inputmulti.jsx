import { MultiInputConstructor } from "./inputmulti_constructor"

export const multiInput = ({data, multiInputHandler}) => {
    return (
        <MultiInputConstructor data={data} multiInputHandler={multiInputHandler}/>
    )
}