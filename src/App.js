import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/Login';


// import Header from './components/Header';

export default function App() {

 
  return (
          <Router >
            {/* <Header /> */}
            <Switch>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Router>
  );
}
