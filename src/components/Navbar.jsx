import React from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import authService from "../services/authService";

const Navbar = () => {

  const navigate = useNavigate();
  const authUser = authService.getAuthUser();
  console.log(authUser);

  const getActiveClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

  const handleLogout = () => { 
    try {
      localStorage.removeItem('authUser');
      window.location.reload(true);
    } catch (error) {
      toast.error(error?.data?.message);
    }
  }

  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4">React JWT</span>
      </div>
      <ul className="nav nav-pills">
        {
          authUser
            ?
            <li className="nav-item">
              <Link to={'#'} onClick={handleLogout} className="nav-link active">Logout</Link>
              <Link to={`/userDashboard/${authUser.userId}`} className="nav-link active">Go to My Profile</Link>
            </li>
            :
            <>
              <li className="nav-item">
                <NavLink to={'/login'} end className={getActiveClass}>Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/register'} end className={getActiveClass}>Register</NavLink>
              </li>
            </>
        }
      </ul>
    </header>
  )
}

export default Navbar;