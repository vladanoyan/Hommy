import React from 'react';
import { Modal as BootstrapModal, ModalBody } from 'reactstrap';
import PropTypes from 'prop-types';
import Cloes from 'react-icons/lib/fa/close';
import showResults from '../../../src/reducer/showResults';
import AddListingWizard from './AddListingWizard';
import LogoBar from '../../resource/images/ListingAddLogo.png';
import cs from './component.pcss';


class ModalListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
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
          fade={false}
          className={cs.modalDialog}
        >
          <ModalBody className={cs.modalContent}>
            <div className={cs.header}>
              <Cloes className={cs.cloes} onClick={this.props.toggle} />
            </div>
            <div className={cs.ModalCenter}>
              <AddListingWizard onSubmit={showResults} />
            </div>
          </ModalBody>
          <div className={cs.FooterListingAdd}>
            <img src={LogoBar} alt="logo" className={cs.imgLogo} />
            <p className={cs.pLogo}>Homm<span className={cs.animateY}>Y</span></p>
          </div>
        </BootstrapModal>
      </div>
    );
  }
}

ModalListing.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
export default ModalListing;
