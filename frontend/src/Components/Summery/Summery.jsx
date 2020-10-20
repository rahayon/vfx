import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
class Summery extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <div>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <h1>
                                            <CountUp start={0} end={500}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                        </h1>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summery;