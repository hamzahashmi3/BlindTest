import React from "react";
import { Route } from "react-router-dom";
import Header from "../header";
// import Footer from './Footer';
import Footer from "../footer";

const MainLayout = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
    <Footer />
  </React.Fragment>
);

const MainLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      )}
    />
  );
};

export default MainLayoutRoute;
