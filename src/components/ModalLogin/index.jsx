import React from 'react';
import { Modal as BootstrapModal, ModalBody } from 'reactstrap';
import PropTypes from 'prop-types';
import Cloes from 'react-icons/lib/fa/close';
import Image from '../../resource/images/log.jpg';
import LogoBar from '../../resource/images/logoBar.png';
import SyncValidationForm from '../../components/SyncValidationFormLogin';
import SyncValidationFormRecoverPass from '../../components/SyncValidationFormLoginRecoverPass';
import showResults from '../../reducer/showResults';
import FacebookBTN from '../../components/Buttons/FacebookBTN';
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
              <SyncValidationForm onSubmit={showResults} />
              <FacebookBTN />
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
                <ModalBody className={cs.recov}>
                  <div className={cs.modalsecondHeader}>
                    Password recovery
                    <Cloes className={cs.cloes} onClick={this.toggleNested.bind(this)} />
                  </div>
                  <SyncValidationFormRecoverPass onSubmit={showResults} />
                </ModalBody>
              </BootstrapModal>
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
