import React, { Component, Fragment } from 'react';
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Sliders from '../Components/slider/Sliders';
import Feature from '../Components/Feature/Feature';
import Collectionitem from '../Components/Collection/Collectionitem';
import Videosection from '../Components/ModelVideo/Videosection';
import Fqsliders from '../Components/slider/Fqsliders';
import Footer from '../Components/Footer/Footer';
import Summery from '../Components/Summery/Summery';


class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <Sliders/>
                <Feature />
                <Collectionitem />
                <Videosection />
                <Fqsliders />
                <Summery/>
                <Footer/>
                
            </Fragment>
        );
    }
}

export default HomePage;