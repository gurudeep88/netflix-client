import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.scss';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Watch from './views/Watch';

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path={'/login'}>
          {!user ? <Login /> : <Redirect to="/" />}
        </Route>
        <Route path={'/register'}>
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        {user && <>
          <Route path={'/movies'}>
            <Home type={'movies'} />
          </Route>
          <Route path={'/series'}>
            <Home type={'series'} />
          </Route>
          <Route path={'/watch'}>
            <Watch />
          </Route>
        </>}
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
