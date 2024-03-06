import { FaBars, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './Context';
import { ImHeart } from 'react-icons/im';
import { IoClose } from 'react-icons/io5';
import NavLinks from './NavLinks';
import { useEffect } from 'react';
const Navbar = () => {
  const { openSidebar, isSidebarOpen, setPageId, pageId } = useGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null);
    }
  };

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <h3 className='logo'>
          empow<span className='single-word'>Her</span>
          <ImHeart className='logo-icon' />
        </h3>
        <NavLinks />
        <button
          className='toggle-btn'
          onClick={openSidebar}
          style={isSidebarOpen ? { background: 'transparent' } : {}}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* nav links later  */}
      </div>
    </nav>
  );
};
export default Navbar;
