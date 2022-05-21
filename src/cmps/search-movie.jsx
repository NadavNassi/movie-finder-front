import { useState } from "react"
import { useNavigate } from 'react-router-dom'


export const SearchMovie = () => {
    const [txt, setTxt] = useState('')
    const navigate = useNavigate()
    const handleChange = ({ target }) => {
        setTxt(target.value)
    }
    const onSubmit = ev => {
        ev.preventDefault()
        navigate(`?q=${txt}`)
    }
    return (
        <section className="search-movie">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Enter movie name" value={txt} onChange={handleChange} />
                <button type="submit" className={!txt ? 'disabeld' : ''} disabled={!txt}>Search</button>
            </form>
        </section>
    )
}