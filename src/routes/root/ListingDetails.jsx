import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Carousel from '../../components/CarouselPhoto';
import ListDetals from '../../components/ListDetal';
import cs from './ListingDetails.pcss';

class Contact extends React.Component {
  render() {
    return (
      <Container className={cs.listDetl}>
        <Row>
          <Col sm="12" md="7" xs="12">
            <Carousel />
          </Col>
          <Col sm="12" md="5" xs="12">
            <ListDetals />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
