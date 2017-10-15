import React from 'react';
import { Modal as BootstrapModal, ModalBody } from 'reactstrap';
import PropTypes from 'prop-types';
import Cloes from 'react-icons/lib/fa/close';
import Image from '../../resource/images/log.jpg';
import LogoBar from '../../resource/images/logoBar.png';
import AsyncValidationForm from '../../components/AsyncValidationForm';
import showResults from '../../reducer/showResults';
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
              <AsyncValidationForm onSubmit={showResults} />

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
