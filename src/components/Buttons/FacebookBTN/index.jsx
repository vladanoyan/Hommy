import React from 'react';
import { NavLink } from 'react-router-dom';
import cs from './component.pcss';

class FacebookBTN extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="https://www.facebook.com/">
          <div className={cs.icon}>
            facebook
          </div>
        </NavLink>
      </div>
    );
  }
}

export default FacebookBTN;
