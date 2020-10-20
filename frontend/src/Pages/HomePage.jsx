import React, { Component, Fragment } from 'react';
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Sliders from '../slider/Sliders'
class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>

                <Sliders />
            </Fragment>
        );
    }
}

export default HomePage;