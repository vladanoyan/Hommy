import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import Sign from 'react-icons/lib/fa/sign-in';
import Heart from 'react-icons/lib/fa/heart-o';
import cs from './component.pcss';
import Pic from '../../resource/images/profile-pic.png';

class Contact extends React.Component {

  render() {
    return (
      <div className={cs.drop}>
        <NavItem>
          <NavLink to="/app/Account" className={cs.linkAccount}>
            <div><img src={Pic} alt="profile" className={cs.profPicture} /></div>
            My Account
          </NavLink>
        </NavItem>
        <div className={cs.dropdown}>
          <NavItem>
            <NavLink to="/app/listings" className={cs.linkAccountTabs}>
              <Heart className={cs.sign_up} />My Favorites</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/app/listings" className={cs.linkAccountTabs}>
              <Sign className={cs.sign_up} />Log out</NavLink>
          </NavItem>
        </div>
      </div>
    );
  }
}

export default Contact;
