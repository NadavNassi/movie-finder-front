import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <div className="logo">
                Logo
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                    <li>
                        <Link to='/login'>login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}