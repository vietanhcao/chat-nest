import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAppSelector } from 'src/app/hooks';
import { store } from 'src/app/store';
import { selectAccessToken } from 'src/features/auth/authSlice';
import CheckPermission from 'src/utils/CheckPermission1';

const PrivateRoute = ({ component: Component, RouteKey, location, ...rest }) => {
  const accessToken = useAppSelector(selectAccessToken);
  // let state = store.getState();
  // const accessToken = state?.auth?.accessToken;
  return (
    <Route
      exact={true}
      {...rest}
      // key={Key}
      render={(props) => {
        return accessToken ? (
          CheckPermission(rest.permissions) ? (
            <Component />
          ) : (
            <p>Bạn không có quyền vào đây!</p>
          )
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        );
      }}
    />
  );
};
export default PrivateRoute;
