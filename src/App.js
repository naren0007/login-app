import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" name="Login" render={props => <Login {...props} />} />
            <Route exact path="/dashboard" name="Dashbaord" render={props => <Dashboard {...props} />} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
