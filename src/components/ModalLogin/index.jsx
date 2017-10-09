import React from 'react';
import Sign from 'react-icons/lib/fa/sign-in';
import { AvForm, AvFeedback, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Button, Modal as BootstrapModal, ModalBody } from 'reactstrap';
import PropTypes from 'prop-types';
import Cloes from 'react-icons/lib/fa/close';
import Image from '../../resource/images/listing.jpg';
import LogoBar from '../../resource/images/logoBar.png';
import cs from './component.pcss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nestedModal: false,
      modal: false,
    };
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
    });
  }
  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  render() {
    return (
      <div>
        <BootstrapModal
          isOpen={this.props.modal}
          toggle={this.props.toggle}
          className={cs.modalDialog}
        >
          <ModalBody className={cs.modalContent}>
            <div className={cs.First}>
              <div className={cs.modallog}>Log In Your Account</div>
              <AvForm>
                <AvGroup className={cs.formGroup}>
                  <AvInput
                    className={cs.formControl}
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    id="example"
                    required
                  />
                  <AvFeedback>Email address is wrong</AvFeedback>
                </AvGroup>
                <AvGroup className={cs.formGroup}>
                  <AvInput
                    className={cs.formControl}
                    name="requiredProp"
                    type="password"
                    placeholder="Password"
                    validate={{ required: true }}
                    required
                  />
                  <AvFeedback>password is wrong</AvFeedback>
                </AvGroup>
                <div
                  role="presentation"
                  className={cs.forgot}
                  onClick={this.toggleNested.bind(this)}
                >
                  Forgot password ?
                </div>
                <BootstrapModal
                  isOpen={this.state.nestedModal}
                  toggle={this.toggleNested.bind(this)}
                >
                  <ModalBody>
                    <div className={cs.modalsecondHeader}>
                      Password recovery
                      <Cloes className={cs.cloes} onClick={this.toggleNested.bind(this)} />
                    </div>
                    <AvForm>
                      <AvGroup className={cs.formGroup}>
                        <AvInput
                          className={cs.formControl}
                          name="email"
                          type="email"
                          placeholder="E-mail"
                          id="example"
                          required
                        />
                        <AvFeedback>Email address is wrong</AvFeedback>
                      </AvGroup>
                      <footer>
                        <Button className={cs.loginModal}>
                            Send
                        </Button>
                        <Button
                          onClick={this.toggleNested.bind(this)}
                          className={cs.signModal}
                        >Cancel
                        </Button>
                      </footer>
                    </AvForm>
                  </ModalBody>
                </BootstrapModal>
                <footer>
                  <Button className={cs.loginModal}>
                    <Sign className={cs.sign_up} />
                    Log In
                  </Button>
                  <Button
                    onClick={this.props.toggle}
                    className={cs.signModal}
                  >
                    Cancel
                  </Button>
                </footer>
              </AvForm>
            </div>
            <div className={cs.Second}>
              <Cloes className={cs.cloes} onClick={this.props.toggle} />
              <img src={Image} className={cs.homeIMG} alt="IMG" />
              <img src={LogoBar} className={cs.logo} alt="logo" />
            </div>
          </ModalBody>
        </BootstrapModal>
      </div>
    );
  }
}

Modal.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,

};
export default Modal;
