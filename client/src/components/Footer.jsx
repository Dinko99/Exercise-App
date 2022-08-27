import './Footer.scss';
import Logo from '../assets/icons/gym-icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt='Logo' className='logo' />
      <div className='footer-links'>
        <Link to='/'>Home</Link>
        <Link to='/exercises'>Exercises</Link>
        <a href='https://github.com/Dinko99/Exercise-App' target='_blank'>
          Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
