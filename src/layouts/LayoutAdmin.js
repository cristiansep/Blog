import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import {Layout} from 'antd';

import './LayoutAdmin.scss';

const LayoutAdmin = (props) => {
    const { routes } = props;
    const { Header, Content, Footer} = Layout;
    return (
       <Layout>
            <Header>
                Header...
            </Header>
            <Content>
                <LoadRoutes routes={routes} />
            </Content>
            <Footer>
                Cristian Sepúlveda
            </Footer>
       </Layout>
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

export default LayoutAdmin;