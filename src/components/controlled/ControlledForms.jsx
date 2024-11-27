import { useEffect, useState } from "react"


export const ControlledForm = () => {

    const [name, setName] = useState('')
    const [nameInputError,setNameInputError] = useState()
    const [age, SetAge] = useState(0);
    const [hairColor, setHairColor] = useState("");

    useEffect(() => {
        if (name.length < 2) {
            setNameInputError("Name must be more than 2 characters")
        } else {
            setNameInputError('')
        }
    }, [name])
    
    const handleSubmit = () => {
        
    }
    return (
        <form onSubmit={ handleSubmit }>
            { nameInputError && <p>{ nameInputError}</p>}
            <input type="text" placeholder="name.." value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="Number" placeholder="Age.." value={age} onChange={(e)=>SetAge(Number(e.target.value))} />
            <input type="text" placeholder="hairColor.." value={ hairColor } onChange={ e => setHairColor(e.target.value) } />
            <button type="submit">submit</button>
        </form>
    )
}