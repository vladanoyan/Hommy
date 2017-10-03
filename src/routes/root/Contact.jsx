import React from 'react';
import { AvForm, AvFeedback, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Container, Row, Col, Button, Label } from 'reactstrap';
import IconMail from 'react-icons/lib/md/mail-outline';
import cs from './Contact.pcss';


class Contact extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1 className={cs.Title}>Contact Us</h1>
            </Col>
          </Row>
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
        <Container-fluid>
          <div className={cs.contact}>
            <Container>
              <Row>
                <Col
                  sm="12"
                  md={{ size: 6, offset: 3 }}
                >
                  <AvForm>
                    <AvGroup>
                      <Label className={cs.label} for="example">E-mail</Label>
                      <AvInput
                        className={cs.formControl}
                        name="email"
                        type="email"
                        id="example"
                        required
                      />
                      <AvFeedback>Email address is wrong</AvFeedback>
                    </AvGroup>
                    <AvGroup>
                      <Label className={cs.label} for="textarea">Your message</Label>
                      <AvInput
                        className={cs.formControl}
                        name="textarea"
                        type="textarea"
                        id="textarea"
                      />
                    </AvGroup>
                    <Button className={cs.sendBtn}>
                      Send
                      <IconMail className={cs.iconMail} />
                    </Button>
                  </AvForm>
                </Col>
              </Row>
            </Container>
          </div>
        </Container-fluid>
      </div>
    );
  }
}

export default Contact;
