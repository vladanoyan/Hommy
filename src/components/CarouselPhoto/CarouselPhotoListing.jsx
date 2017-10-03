import React from 'react';
import SlideShowModal from '../Carousel/CarouselListing';
import jp0 from '../../resource/images/listing.jpg';
import jp1 from '../../resource/images/11.jpg';
import jp2 from '../../resource/images/22.jpg';
import jp3 from '../../resource/images/33.jpg';
import jp4 from '../../resource/images/44.jpg';

const images = [
  {
    src: jp0,
  },
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
    };

    this.margin = 30;
  }
  render() {
    return (
      <div>
        <SlideShowModal
          images={images}
          activeIndex={this.state.activeIndex}
        />
      </div>
    );
  }
}

export default Photos;
