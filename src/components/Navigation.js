import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <span className='text-one'>DEV</span>
        <span className='text-two'>CONNECTOR</span>
      </Link>
    </header>
  );
};

export default Navigation;
