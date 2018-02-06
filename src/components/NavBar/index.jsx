import React from 'react';
import { NavLink } from 'react-router-dom';
import TiIconPack from 'react-icons/lib/fa/align-justify';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
import ModalSign from '../../components/ModalSign';
import ModalLogin from '../../components/ModalLogin';
import Account from '../../components/MyAccount';
import LogoBar from '../../resource/images/logoBar.png';
import LoginSignButton from '../Buttons/LoginSignComponentButton/index';
import cs from './component.pcss';

class NavbarMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      modalIsOpen: false,
      modalSIsOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  toggleModalSI() {
    this.setState({
      modalSIsOpen: !this.state.modalSIsOpen,
    });
  }
  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    });
  }
  render() {
    return (
      <div>
        <div className={cs.NavbarContent}>
          <Navbar light toggleable className={cs.Navbar}>
            <TiIconPack className={cs.icon} onClick={this.toggle} />
            <NavItem>
              <NavLink to="/" className={cs.brend}>
                <img src={LogoBar} alt="logo" />
                <span className={cs.fadeIn1}>H</span>
                <span className={cs.fadeIn3}>o</span>
                <span className={cs.fadeIn5}>m</span>
                <span className={cs.fadeIn7}>m</span>
                <span className={cs.fadeIn9}>Y</span>
              </NavLink>
            </NavItem>
            <Collapse className={cs.collapse} isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <LoginSignButton
                  toggleModal={this.toggleModal.bind(this)}
                  toggleModalSI={this.toggleModalSI.bind(this)}
                />
                <Account />
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <ModalSign
          modal={this.state.modalSIsOpen}
          toggle={this.toggleModalSI.bind(this)}
        />
        <ModalLogin
          modal={this.state.modalIsOpen}
          toggle={this.toggleModal.bind(this)}
        />
      </div>
    );
  }
}
export default NavbarMenu;
