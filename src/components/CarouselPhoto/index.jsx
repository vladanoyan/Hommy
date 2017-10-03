import React from 'react';
import Lightbox from 'react-images';
import SlideShowModal from '../../components/Carousel';
import jp1 from '../../resource/images/11.jpg';
import jp2 from '../../resource/images/22.jpg';
import jp3 from '../../resource/images/33.jpg';
import jp4 from '../../resource/images/44.jpg';

const images = [
  {
    src: jp1,
  },
  {
    src: jp2,
  },
  {
    src: jp3,
  },
  {
    src: jp4,
  },
];
class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      lightboxIsOpen: false,
    };

    this.margin = 30;
  }
  closeLightbox() {
    this.setState({ lightboxIsOpen: false });
  }
  lightboxIsOpen() {
    this.setState({ lightboxIsOpen: true });
  }
  clickphoto() {
    this.setState({ lightboxIsOpen: true });
  }
  gotoPrevious() {
    const { activeIndex } = this.state;

    if (activeIndex === 0) {
      return;
    }

    this.setState({
      activeIndex: activeIndex - 1,
    });
  }

  gotoNext() {
    const { activeIndex } = this.state;

    if (activeIndex === images.length - 1) {
      return;
    }

    this.setState({
      activeIndex: activeIndex + 1,
    });
  }
  render() {
    return (
      <div>
        <SlideShowModal
          images={images}
          activeIndex={this.state.activeIndex}
          imgclick={this.clickphoto.bind(this)}
        />

        <Lightbox
          images={images}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevious.bind(this)}
          onClickNext={this.gotoNext.bind(this)}
          onClose={this.closeLightbox.bind(this)}
          currentImage={this.state.activeIndex}
        />
      </div>
    );
  }
}

export default Photos;
