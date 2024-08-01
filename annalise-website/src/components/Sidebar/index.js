import { Link } from 'react-router-dom'
const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            Click Here!
        </Link>
    </div>
)

export default Sidebar;