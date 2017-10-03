import { Container, Row, Col } from 'reactstrap';
import React from 'react';
import Facebook from 'react-icons/lib/ti/social-facebook-circular';
import Instagram from 'react-icons/lib/ti/social-instagram-circular';
import Linkdin from 'react-icons/lib/ti/social-linkedin-circular';
import cs from './component.pcss';

class Footer extends React.Component {
  render() {
    return (
      <Container fluid className={cs.footer}>
        <Row>
          <Col>
            <div className={cs.socia_l}>
              <Facebook className={cs.social} />
              <Instagram className={cs.social} />
              <Linkdin className={cs.social} />
              <p className={cs.copy}>Copyright © 2017 Homm<span>Y </span> All rights reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
