import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authService } from '../services/auth.service'


export const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const navigate = useNavigate()
    const goBack = () => {
        navigate('/')
    }
    const onSubmit = async (ev) => {
        ev.preventDefault()
        await authService.login(credentials)
        navigate('/')
    }
    const stopEvent = (ev) => {
        ev.stopPropagation()
    }
    const handleChange = ({ target }) => {
        const field = target.name
        const { value } = target
        setCredentials(prevState => ({ ...prevState, [field]: value }))
    }
    return (
        <section className="login-screen" onClick={goBack}>
            <div className="login" onClick={stopEvent}>
                <form onSubmit={onSubmit}>
                    <input type="email" name='email' placeholder='Insert your email' value={credentials.email} onChange={handleChange} />
                    <input type="password" name='password' placeholder='Insert your password' value={credentials.password} onChange={handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}