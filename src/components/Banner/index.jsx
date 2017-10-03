import React from 'react';
import Banner from '../../resource/images/baner.jpg';
import cs from './component.pcss';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className={cs.banner}>
          <img src={Banner} alt="Banner" />
          <img src={Banner} alt="Banner" />
        </div>
      </div>
    );
  }
}

export default HomePage;
