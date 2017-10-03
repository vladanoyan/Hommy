import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../Flex';
import Icon from '../Icon';
import cs from './component.pcss';

class SlideShowModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeIndex !== false) {
      this.setState({
        activeIndex: nextProps.activeIndex,
      });
    }
  }

  onSlideLeft() {
    const { activeIndex } = this.state;

    if (activeIndex === 0) {
      return;
    }

    this.setState({
      activeIndex: activeIndex - 1,
    });
  }

  onSlideRight() {
    const { activeIndex } = this.state;

    if (activeIndex === this.props.images.length - 1) {
      return;
    }

    this.setState({
      activeIndex: activeIndex + 1,
    });
  }

  onSlideClick(activeIndex) {
    this.setState({
      activeIndex,
    });
  }
  renderImages() {
    const map = (item, index) => {
      const className = this.state.activeIndex === index ? cs.active : '';
      return (
        <div role="presentation" onClick={this.onSlideClick.bind(this, index)} key={index} className={`${cs.slideItem} ${className}`}>
          <img src={item.src} alt="Slide item" />
        </div>
      );
    };
    return this.props.images.map(map);
  }
  render() {
    if (!this.props.images.length) {
      return null;
    }

    return (
      <div>
        <div className={cs.mainImage}>
          <div
            role="button"
            tabIndex={0}
            className={`${cs.arrow} ${cs.left}`}
            onClick={this.onSlideLeft.bind(this)}
          >
            <Icon icon="left-arrow" color="#c3c3c3" fontSize={18} />
          </div>
          <div
            role="button"
            tabIndex={0}
            className={`${cs.arrow} ${cs.right}`}
            onClick={this.onSlideRight.bind(this)}
          >
            <Icon icon="right-arrow" color="#c3c3c3" fontSize={18} />
          </div>
          <img
            role="presentation"
            onClick={this.props.imgclick}
            src={this.props.images[this.state.activeIndex].src}
            alt="Main slide"
          />
        </div>
        <div className={cs.slideContent}>
          <Flex>
            {this.renderImages()}
          </Flex>
        </div>
      </div>
    );
  }
}

SlideShowModal.propTypes = {
  imgclick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeIndex: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]).isRequired,
};

export default SlideShowModal;
