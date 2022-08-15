import Logo from '../assets/icons/gym-icon.png'
import './Navbar.scss'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <img src={Logo} alt="Logo" className='logo' />
        <Link to='/'>Home</Link>
        <Link to='/exercises'>Exercises</Link>
    </nav>
  )
}

export default Navbar