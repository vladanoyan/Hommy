import React from 'react';
import Banner from '../../resource/images/giphy (1).gif';
import Banner1 from '../../resource/images/giphy (2).gif';
import cs from './component.pcss';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className={cs.banner}>
          <img src={Banner} alt="Banner" />
          <img src={Banner1} alt="Banner" />
        </div>
      </div>
    );
  }
}

export default HomePage;
