import React from 'react';
import Sign from 'react-icons/lib/fa/sign-in';
import { NavLink } from 'react-router-dom';
import TiIconPack from 'react-icons/lib/fa/align-justify';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink as Link,
} from 'reactstrap';
import ModalLogin from '../../components/ModalSign';
import LogoBar from '../../resource/images/logoBar.png';
import cs from './component.pcss';

class NavbarMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      modalIsOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
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
                HommY</NavLink>
            </NavItem>
            <Collapse className={cs.collapse} isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className={cs.login} onClick={this.toggleModal.bind(this)}>
                    <Sign className={cs.sign_up} />Log In</Link>
                </NavItem>
                <NavItem>
                  <NavLink to="/app/listings" className={cs.sign}>Sign Up</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <ModalLogin
          modal={this.state.modalIsOpen}
          toggle={this.toggleModal.bind(this)}
        />
      </div>
    );
  }
}
export default NavbarMenu;
