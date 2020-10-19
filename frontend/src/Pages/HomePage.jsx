import React, { Component, Fragment } from 'react';
import Summery from '../Components/Summery/Summery';
import TopNavigation from '../Components/TopNavigation/TopNavigation';
class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <Summery/>
            </Fragment>
        );
    }
}

export default HomePage;