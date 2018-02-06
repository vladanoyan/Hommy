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
      <div className={cs.navContent}>
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
              <NavItem>
                <NavLink activeClassName={`${cs.active1}`} to="/app/listings" className={cs.link}>Listing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName={`${cs.active1}`} to="/app/contacts" className={cs.link}>Contact us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName={`${cs.active1}`} to="/app/terms" className={cs.link}>Terms of Service</NavLink>
              </NavItem>
              <LoginSignButton
                toggleModal={this.toggleModal.bind(this)}
                toggleModalSI={this.toggleModalSI.bind(this)}
              />
            </Nav>
          </Collapse>
        </Navbar>
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
