import React from "react";
import { Route, Switch } from "react-router-dom";

import Tree from "containers/Tree/Tree";
import Form from "containers/Form/Form";

import './TreeRoutes.scss'

const TreeRoutes = () => {
  return (
    <div className='app-tree-routes'>
      <Switch>
        <Route exact path="/tree" component={Tree} />
        <Route exact path="/" component={Form} />
      </Switch>
    </div>
  );
};

export default TreeRoutes;
