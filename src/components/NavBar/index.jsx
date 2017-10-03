import React from 'react';
import Sign from 'react-icons/lib/fa/sign-in';
import { AvForm, AvFeedback, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { NavLink } from 'react-router-dom';
import TiIconPack from 'react-icons/lib/fa/align-justify';
import {
Collapse,
Navbar,
Nav,
NavItem,
NavLink as Link,
Button,
} from 'reactstrap';
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
        <div>
          <div className={this.state.modalIsOpen ? `${cs.modal}` : `${cs.none}`}>
            <div className={cs.modalContent}>
              <div className={cs.modallog}>Log In Your Account</div>
              <AvForm>
                <AvGroup>
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
                <AvGroup>
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
                <footer>
                  <Button className={cs.loginModal}>
                    <Sign className={cs.sign_up} />
                    Log In
                  </Button>
                  <Button
                    onClick={this.toggleModal.bind(this)}
                    className={cs.signModal}
                  >Cancel
                  </Button>
                </footer>
              </AvForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NavbarMenu;
