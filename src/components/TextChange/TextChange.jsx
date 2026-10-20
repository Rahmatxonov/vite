import { useState } from "react"


export default function TextChange () {

    const [text, setText] = useState('Hello React')

return(
    <>
    <h1>{text}</h1>
    <button onClick={() => setText('Men Reactni o`rganayabman')}>Click</button>
    </>
)



}


