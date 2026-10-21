import { useRef, useState } from "react"

export default function InputRef () {
const inputValue = useRef(null)
const [value, setValue] = useState('')

function handleClick () {
    setValue(inputValue.current.value);
}

    return(
     <div>
        <input type="text" placeholder="search value..." ref={inputValue}/>
        <button onClick={handleClick}>Click</button>
        <h2>{value}</h2>
     </div>
    )
}