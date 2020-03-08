import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Row, Col } from "antd";
import {Layout} from 'antd';

const LayoutBasic = (props) => {
    const { routes } = props;
    return (
        <>
        <Row>
          <Col lg={4} />
          <Col lg={16}>
      
          </Col>
          <Col lg={4} />
        </Row>
        <LoadRoutes routes={routes} />
      </>
    );
};

function LoadRoutes({ routes }) {
    return (
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    );
  }

export default LayoutBasic;