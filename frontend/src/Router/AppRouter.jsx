import React, { Component, Fragment } from 'react';

import { Route, Switch } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import ContactPage from '../Pages/ContactPage';
import PrivacyPolicyPage from '../Pages/PrivacyPolicyPage';
import RefundPage from '../Pages/RefundPage';
import AboutPage from '../Pages/AboutPage';


class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact="/" component={HomePage} />
                    <Route exact="/contact" component={ContactPage} />
                    <Route exact="/privacy" component={PrivacyPolicyPage} />
                    <Route exact="/refund" component={RefundPage} />
                    <Route exact="/about" component={AboutPage} />
                </Switch>
            </Fragment>
        );
    }
}
export default AppRouter;