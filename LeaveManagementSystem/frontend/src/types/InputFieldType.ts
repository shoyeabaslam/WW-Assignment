export default interface InputFieldType {
    inputValue:string,
    handleChange:(e: React.ChangeEvent<HTMLInputElement>) => void,
    name:string,
    type:string,
    placeholder:string
}
