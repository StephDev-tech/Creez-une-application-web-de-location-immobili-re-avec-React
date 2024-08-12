import logo from '../assets/logo_kasa.svg'
import {Link} from 'react-router-dom'
import '../styles/Header.scss'

const Header = () => {
    return(
        <div className="header">
			<img src={logo} alt="logo Kasa"/>
			<nav className="nav">
                <Link to="/" className='link'>Accueil</Link>				
                <Link to="/about" className='link'>A propos</Link>
			</nav>
		</div>
    )
}

export default Header