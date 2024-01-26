import { useState } from "react"
interface Props {
    addTodo: (text: string) => void;
}
const Form = ({ addTodo }: Props) => {
    const [text, setText] = useState("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const handleSubmit = (e : React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const trimedText = text.trim()
        if(!trimedText) return
        addTodo(trimedText)
        setText("")
    }
    console.log({ text })
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="text" placeholder='enter todo' value={text} onChange={handleChange} />
            <button type="submit" >Add todo</button>
        </form>
    )
}

export default Form
