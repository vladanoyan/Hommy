import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Carousel from '../../components/CarouselPhoto';

class Contact extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Carousel />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
