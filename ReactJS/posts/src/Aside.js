import { Link } from 'react-router-dom';
import './Aside.css';

function Aside(props) {
  const { collapsed = true } = props;
  return (
    <aside className={collapsed ? 'collapsed' : undefined}>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/users'>Users</Link>
      </nav>
    </aside>
  );
}

export default Aside;
