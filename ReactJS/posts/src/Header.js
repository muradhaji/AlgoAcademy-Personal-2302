import './Header.css';

function Header(props) {
  let { toggleMenu } = props;
  return (
    <header className='container'>
      <div className='logo'>Posts App</div>
      <div className='menuToggle' onClick={toggleMenu}>
        <i className='fa-solid fa-bars'></i>
      </div>
    </header>
  );
}

export default Header;
