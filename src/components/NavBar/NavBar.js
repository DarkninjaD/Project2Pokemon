import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () =>{

    return (
        <div className = "navigation">
            <ul className = "nav-list">
                <li><Link className = "forest" to="/location/forest" style={{ textDecoration: 'none' }} >Forest Region</Link></li>
                <li><Link className = "town" to="/location/town" style={{ textDecoration: 'none' }}>Town Region</Link></li>
                <li><Link className = "water" to="/location/water" style={{ textDecoration: 'none' }}>Water Region</Link></li>
                <li><Link className = "rock" to="/location/rock" style={{ textDecoration: 'none' }}>Rock Region</Link></li>
                <li><Link className = "gym" to="/location/gym" style={{ textDecoration: 'none' }}>The Gym</Link></li>
                <li><Link className = "spooky" to="/location/spooky" style={{ textDecoration: 'none' }}>Spooky Region</Link></li>
                <li><Link className = "volcano" to="/location/volcano" style={{ textDecoration: 'none' }}>Volcano Region</Link></li>
            </ul>
        </div>
    )
}

export default NavBar