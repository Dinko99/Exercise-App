import Logo from '../assets/icons/gym-icon.png';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <img src={Logo} alt='Logo' className='logo' />
      <Link to='/exercises'>Exercises</Link>
    </nav>
  );
};

export default Navbar;
