import { FC, createElement } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/authentication-slice';

import './styles/auth.css';

export const Auth: FC = () => {

  const dispatch = useDispatch();
  
  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <main className='auth'>
      <section>
        <form onSubmit={onSubmitHandler}>
          <div className='control'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className='control'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};
