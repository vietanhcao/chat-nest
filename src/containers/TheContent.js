import { LoadingOutlined } from '@ant-design/icons';
import React, { Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';
// routes config
import routes from '../routes';
import PrivateRoute from '../components/PrivateRoute/index';
import CheckPermission from 'src/utils/CheckPermission';

const loading = (
  <div className="pt-3 text-center">
    <LoadingOutlined style={{ fontSize: 24 }} spin />
  </div>
);

const TheContent = () => {
  // console.log(routes);
  return (
    <main className="c-main">
      <div>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <PrivateRoute
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    permissions={route.permissions}
                    component={(props) => {
                      return CheckPermission.isAllowedRoute(route.permissions) ? (
                        <route.component {...props} />
                      ) : (
                        <p>Bạn không có quyền vào đây!</p>
                      );
                    }}
                  />
                )
              );
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </div>
    </main>
  );
};

export default React.memo(TheContent);
