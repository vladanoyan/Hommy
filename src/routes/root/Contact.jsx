import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CheckBox from '../../components/CheckBox';
import SyncValidationFormContact from '../../components/SyncValidationFormContact';
import showResults from '../../reducer/showResults';
import cs from './Contact.pcss';


class Contact extends React.Component {
  render() {
    return (
      <div>
        <form>
          <CheckBox
            label="Private"
            isChecked={this.props.isChecked}
            onChange={() => this.props.dispatCheck()}
          />
        </form>
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
                  <SyncValidationFormContact onSubmit={showResults} />
                </Col>
              </Row>
            </Container>
          </div>
        </Container-fluid>
      </div>
    );
  }
}

Contact.propTypes = {
  dispatCheck: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatCheck: () => {
      dispatch({ type: 'CHECK' });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    isChecked: state.isChecked,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);
