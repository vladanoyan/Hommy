import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import SignOut from 'react-icons/lib/fa/sign-out';
import Heart from 'react-icons/lib/fa/heart';
import Listing from 'react-icons/lib/fa/plus-square';
import Comma from 'react-icons/lib/md/dialpad';
import Pic from '../../resource/images/profile-pic.png';
import cs from './component.pcss';

class Contact extends React.Component {

  render() {
    return (
      <div className={cs.drop}>
        <NavItem>
          <NavLink to="/app/Account" className={cs.linkAccount}>
            <div><img src={Pic} alt="profile" className={cs.profPicture} /></div>
            My Account
            <Comma className={cs.comma} />
          </NavLink>
        </NavItem>
        <div className={cs.dropdown}>
          <NavItem>
            <NavLink to="/app/listings" className={cs.linkAccountTabs}>
              <Heart className={cs.sign_up} />My Favorites</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/app/listings" className={cs.linkAccountTabs}>
              <Listing className={cs.sign_up} />Add Listings</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/app/listings" className={cs.linkAccountTabs}>
              <SignOut className={cs.sign_up} />Log out</NavLink>
          </NavItem>
        </div>
      </div>
    );
  }
}

export default Contact;
