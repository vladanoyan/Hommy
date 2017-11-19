import React from 'react';
import Sign from 'react-icons/lib/fa/sign-in';
import PropTypes from 'prop-types';
import {
  NavItem,
  NavLink as Link,
} from 'reactstrap';
import cs from './component.pcss';

class LoginSign extends React.Component {
  render() {
    return (
      <div className={cs.component}>
        <NavItem>
          <Link className={cs.login} onClick={this.props.toggleModal}>
            <Sign className={cs.sign_up} />Log In</Link>
        </NavItem>
        <NavItem>
          <Link className={cs.sign} onClick={this.props.toggleModalSI}>
            Sign Up</Link>
        </NavItem>
      </div>
    );
  }
}

LoginSign.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  toggleModalSI: PropTypes.func.isRequired,
};
export default LoginSign;
