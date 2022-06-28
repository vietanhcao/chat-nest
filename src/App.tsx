import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import './App.scss';

const loading = (
  <div className="pt-3 text-center">
    <LoadingOutlined style={{ fontSize: 24 }} spin />
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));

// Pages
// const Login = React.lazy(() => import('./features/auth/pages/login/Login'));
const LoginPage = React.lazy(() => import('./features/auth/pages/LoginPage'));
const PinPage = React.lazy(() => import('./features/auth/pages/PinPage'));
const ForgotPasswordPage = React.lazy(() => import('./features/auth/pages/ForgotPasswordPage'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page404 = React.lazy(() => import('./components/common/NotFound'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" render={(props) => <LoginPage />} />
            <Route exact path="/pin" render={(props) => <PinPage />} />
            <Route exact path="/forgot-password" render={(props) => <ForgotPasswordPage />} />
            <Route exact path="/register" render={(props) => <Register />} />
            <Route exact path="/404" render={(props) => <Page404 />} />
            <Route exact path="/500" render={(props) => <Page500 />} />
            <Route path="/" render={(props) => <DefaultLayout />} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
