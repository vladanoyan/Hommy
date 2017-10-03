import React from 'react';
import cs from './component.pcss';

class NavbarMenu extends React.Component {
  render() {
    return (
      <div className={cs.socia_l}>
        <span className={cs.social}>Facebook</span>
        <span className={cs.socialIns}>Instragram</span>
        <p className={cs.copyright}>Copyright © 2017 Homm<span>Y</span></p>
        <p className={cs.copyright}>All rights reserved</p>
      </div>
    );
  }
}
export default NavbarMenu;
