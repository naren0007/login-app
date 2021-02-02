import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "././PrivateRoute"

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" name="Login" component={Login} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
