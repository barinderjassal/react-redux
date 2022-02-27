import { FC, createElement, Fragment, } from 'react';
import { useSelector } from 'react-redux';
import { Auth, Counter, Header, UserProfile } from './components';

export const App: FC = () => {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && (
        <Fragment>
          <UserProfile />
          <Counter />
        </Fragment>
      )}
    </Fragment>
  );
};
