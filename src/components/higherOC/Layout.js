import React from 'react';
import {Route} from 'react-router-dom';
import Footer from '../footer';

const Layout = ({ children }) => (
    
    <React.Fragment>
        {/* <CheckoutHeader /> */}
        {children}
        <Footer />
    </React.Fragment>

);

const LayoutRoute = ({ component: Component, ...rest}) => {
    return(
        <Route {...rest} render={(props) => 
            <Layout>
                <Component {...props} />
            </Layout>} />
    )
}

export default LayoutRoute
