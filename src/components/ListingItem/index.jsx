import React from 'react';
import { Row, Col } from 'reactstrap';
import ListingGridView from '../../components/ListingGridView';
import listingImage from '../../resource/images/listing.jpg';
import cs from './component.pcss';

const listings = [
  {
    imageSrc: listingImage,
    price: '1,445,500',
    isFavorite: false,
    photoCount: 34,
    address: '15 Green Side',
    city: 'Campebellburg, KY 4c590',
    beds: 4,
    baths: 2,
    sq: 2500,
    dateListed: '12 Jan 2017',
  },
  {
    imageSrc: listingImage,
    price: '1,445,500',
    isFavorite: false,
    photoCount: 33,
    address: '15 Green Side',
    city: 'Campebellburg, KY 4c590',
    beds: 4,
    baths: 2,
    sq: 2500,
    dateListed: '12 Jan 2017',
  },
  {
    imageSrc: listingImage,
    price: '1,445,500',
    isFavorite: false,
    photoCount: 32,
    address: '15 Green Side',
    city: 'Campebellburg, KY 4c590',
    beds: 4,
    baths: 2,
    sq: 2500,
    dateListed: '12 Jan 2017',
  },
  {
    imageSrc: listingImage,
    price: '1,445,500',
    isFavorite: false,
    photoCount: 31,
    address: '15 Green Side',
    city: 'Campebellburg, KY 4c590',
    beds: 4,
    baths: 2,
    sq: 2500,
    dateListed: '12 Jan 2017',
  },
  {
    imageSrc: listingImage,
    price: '1,445,500',
    isFavorite: false,
    photoCount: 34,
    address: '15 Green Side',
    city: 'Campebellburg, KY 4c590',
    beds: 4,
    baths: 2,
    sq: 2500,
    dateListed: '12 Jan 2017',
  },
  {
    imageSrc: listingImage,
    price: '1,445,500',
    isFavorite: false,
    photoCount: 34,
    address: '15 Green Side',
    city: 'Campebellburg, KY 4c590',
    beds: 4,
    baths: 2,
    sq: 2500,
    dateListed: '12 Jan 2017',
  },
];


class Listings extends React.Component {
  static renderListings(items) {
    const map = (item, index) => {
      return (
        <Col xs="12" sm="6" md="4" lg="4" xl="3" key={index}>
          <div className={cs.Listing}>
            <ListingGridView detailsUrl={`/app/listing/${index}/details`} listing={item} />
          </div>
        </Col>
      );
    };

    return items.map(map);
  }

  render() {
    return (
      <div>
        <Row className={cs.ListingItem}>
          {Listings.renderListings(listings)}
        </Row>
      </div>
    );
  }
}


export default Listings;

