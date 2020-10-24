import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import {FaCheckCircle} from 'react-icons/fa';
class Summery extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summeryBanner summerySection p-0">
                    <div className="summeryBannerOverlay">
                        <Container className="text-center">
                            <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row className="countSection">
                                        <Col>
                                            <h1 className="countTitle">
                                                <CountUp start={0} end={500}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countClient">Totoal Project</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                        <Col>
                                            <h1 className="countTitle">
                                                <CountUp start={0} end={500}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countClient">Totoal Project</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <Card className="cardSection">
                                        <Card.Body>
                                            <Card.Title className="cardTitle">How I Work</Card.Title>
                                            <Card.Text className="cardSubTitle">
                                                <p><FaCheckCircle className="summeryIcon"/> Requirement Gathering</p>
                                                <p><FaCheckCircle className="summeryIcon"/> Requirement Gathering</p>
                                                <p><FaCheckCircle className="summeryIcon"/> Requirement Gathering</p>
                                                <p><FaCheckCircle className="summeryIcon"/> Requirement Gathering</p>
                                                
                                            </Card.Text>
                                        </Card.Body>                             
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summery;