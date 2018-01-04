import React from 'react';
import DefaultExample from './example_default';
import cs from './component.pcss';

class DropZone extends React.Component {
  render() {
    return (
      <div>
        <div className={cs.example}>
          <h5 className={cs.title}>Images</h5>
          <DefaultExample />
        </div>
      </div>
    );
  }
}
export default DropZone;
