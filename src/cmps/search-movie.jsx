import { useState } from "react"


export const SearchMovie = ({ handleSubmit }) => {
    const [txt, setTxt] = useState('')
    const handleChange = ({ target }) => {
        setTxt(target.value)
    }
    const onSubmit = ev => {
        ev.preventDefault()
        handleSubmit(txt)
    }
    return (
        <section className="search-movie">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Enter movie name" value={txt} onChange={handleChange} />
                <button type="submit" disabled={!txt}>Search</button>
            </form>
        </section>
    )
}