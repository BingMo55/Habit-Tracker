import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Security, ImplicitCallback, SecureRoute } from '@okta/okta-react';

import Login from '../login'
import Home from '../home'

class Main extends Component {
 render() {
   return (
     <Router>
       <Security
         issuer={'https://localhost:3000/'}
         client_id={'0oa18drlcIu8kVRLH4x6'}
         redirect_uri={'https://localhost:3000/implicit/callback'}
         scope={['openid', 'profile', 'email']}>
        
         <Switch>
           <Route exact path="/" component={Login} />
           <Route path="/implicit/callback" component={ImplicitCallback} />
           <SecureRoute path="/home" component={Home} />
         </Switch>
       </Security>
     </Router>
   );
 }
}

export default Main;