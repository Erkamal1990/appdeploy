import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Switch , Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import './index.css';
import 'react-toastify/dist/ReactToastify.css'; 
import Login from './Login';
import Dashboard from './Dashboard';
import Billing from './Billing';
import Campaigns from './Campaigns';
import Settings from './Settings';
import Register from './Register';
import ViewCampaign from './ViewCampaign';
toast.configure();
export function onEnter(nextState, transition, callback) {
  const { pathname } = nextState.location
  const isLoggedIn = sessionStorage.getItem('isLogin') === 'true'
  if (isLoggedIn) {
    transition('/') //redirect to Home component
  }
  return callback() // go as it is.
}

ReactDOM.render(
  // <React.StrictMode>
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
    <Route path="/Billing" onEnter={onEnter}><Billing /> </Route>
    <Route path="/Campaigns" onEnter={onEnter}><Campaigns /></Route>
    <Route path="/Settings" onEnter={onEnter}><Settings /></Route>
    <Route path="/Login" onEnter={onEnter}><Login /></Route>
    <Route path="/Register" onEnter={onEnter}><Register /></Route>
    <Route path="/ViewCampaign/" onEnter={onEnter}><ViewCampaign /></Route>
    <Route path="/" onEnter={onEnter}> <Dashboard /></Route>
    </Switch>
    </Router>,
  document.getElementById('root')
);