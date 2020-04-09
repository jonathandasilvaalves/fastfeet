import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Orders from '../pages/Orders';
import OrdersCreate from '../pages/Orders/Create';
import Deliverymans from '../pages/Deliverymans';
import DeliverymansCreate from '../pages/Deliverymans/Create';
import DeliverymansEdit from '../pages/Deliverymans/Edit';
import Recipients from '../pages/Recipients';
import Problems from '../pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/orders" exact component={Orders} isPrivate />
      <Route path="/orders/create" exact component={OrdersCreate} isPrivate />
      <Route path="/deliverymans" exact component={Deliverymans} isPrivate />
      <Route
        path="/deliverymans/edit/:id"
        component={DeliverymansEdit}
        isPrivate
      />
      <Route
        path="/deliverymans/create"
        exact
        component={DeliverymansCreate}
        isPrivate
      />
      <Route path="/recipients" exact component={Recipients} isPrivate />
      <Route path="/problems" exact component={Problems} isPrivate />
    </Switch>
  );
}
