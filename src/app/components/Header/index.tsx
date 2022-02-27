
import { FC, createElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/authentication-slice';

import './styles/header.css';

export const Header: FC = () => {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  
  const logoutHandler = () => {
    dispatch(authActions.logout());
  }
  return (
    <header className='header'>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
