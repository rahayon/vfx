import React, { Component, Fragment } from 'react';
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Sliders from '../slider/Sliders'
import Summery from '../Components/Summery/Summery';

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <Sliders />
               <Summery/>
            </Fragment>
        );
    }
}

export default HomePage;