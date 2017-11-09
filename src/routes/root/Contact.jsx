import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CheckBox from '../../components/CheckBox';
import SyncValidationFormContact from '../../components/SyncValidationFormContact';
import showResults from '../../reducer/showResults';
import cs from './Contact.pcss';


class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false,
    };
  }
  handleChange() {
    this.props.lll();
    this.setState({ checked: !this.state.checked });
  }
  render() {
    return (
      <div>
        <form>
          <CheckBox
            label="Private"
            isChecked={this.props.checked}
            onChange={this.handleChange.bind(this)}
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
  lll: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    lll: () => {
      dispatch({ type: 'CHECK' });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    checked: state.dispatCheck.isChecked,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);
