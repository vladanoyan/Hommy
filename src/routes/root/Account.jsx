import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import cs from './Account.pcss';


class Account extends React.Component {

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <div className={cs.paragraf}>
                <p>If you have any comments or feedback, please do not hesitate to write us.
                  We love feedback! This is your site and your suggestions
                  will help us make it better.</p>
                <p>Please provide as much detail as possible.
                  If your inquiry is related to an existing ad, please include the ad reference
                  number with your message.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Account;
