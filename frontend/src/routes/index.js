import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Orders from '../pages/Orders';
import OrdersCreate from '../pages/Orders/Create';
import OrderEdit from '../pages/Orders/Edit';

import Deliverymans from '../pages/Deliverymans';
import DeliverymansCreate from '../pages/Deliverymans/Create';
import DeliverymansEdit from '../pages/Deliverymans/Edit';

import Recipients from '../pages/Recipients';
import RecipientsEdit from '../pages/Recipients/Edit';
import RecipientsCreate from '../pages/Recipients/Create';

import Problems from '../pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/orders" exact component={Orders} isPrivate />
      <Route path="/orders/create" exact component={OrdersCreate} isPrivate />
      <Route path="/orders/edit/:id" component={OrderEdit} isPrivate />

      <Route path="/deliverymans" exact component={Deliverymans} isPrivate />
      <Route
        path="/deliveryman/edit/:id"
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
      <Route path="/recipient/edit/:id" component={RecipientsEdit} isPrivate />
      <Route
        path="/recipient/create"
        exact
        component={RecipientsCreate}
        isPrivate
      />

      <Route path="/problems" exact component={Problems} isPrivate />
    </Switch>
  );
}
