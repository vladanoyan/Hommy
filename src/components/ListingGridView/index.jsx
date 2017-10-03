import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import Flex, { Col } from '../../components/Flex';
import { Button } from '../../components/Form';
import Icon from '../../components/Icon';
import CarouselListing from '../../components/CarouselPhoto/CarouselPhotoListing';
import cs from './component.pcss';

const ListingGridView = (props) => {
  const { listing } = props;
  const favoriteIcon = listing.isFavorite ? 'heart_full' : 'heart';

  return (
    <div className={cs.root}>
      <div className={cs.imageOverlay}>
        <div className={cs.imageContent}>
          <Flex justifyContent="space-between" alignItems="center">
            <Col margin={{ left: 10 }}>
              <div className={cs.price}>{listing.price}</div>
            </Col>
            <Col>
              <Flex className={cs.Fl} alignItems="center">
                <Col margin={{ right: 10 }}>
                  <span className={cs.photoCount}>{listing.photoCount}</span>
                </Col>
                <Col margin={{ right: 10 }}>
                  <Icon icon="photo" fontSize={12} color="#ffffff" />
                </Col>
                <div className={cs.favorite}>
                  <Flex alignItems="center" justifyContent="center" height="100%">
                    <Icon icon={favoriteIcon} color="#ffffff" fontSize={12} />
                  </Flex>
                </div>
              </Flex>
            </Col>
          </Flex>
        </div>
        <CarouselListing />
      </div>
      <div className={cs.content}>
        <div className={cs.title}>{listing.address}</div>
        <div className={cs.description}>{listing.city}</div>
        <hr className={cs.hr} />
        <div className={cs.title}>Date Listed</div>
        <div className={cs.description}>{listing.dateListed}</div>
        <hr className={cs.hr} />
        <div className={cs.title}>House</div>
        <Flex justifyContent="space-between">
          <div>
            <div className={cs.title}>{listing.beds}</div>
            <div className={cs.description}>Beds</div>
          </div>
          <div>
            <div className={cs.title}>{listing.baths}</div>
            <div className={cs.description}>Baths</div>
          </div>
          <div>
            <div className={cs.title}>{listing.sq}</div>
            <div className={cs.description}>Sq</div>
          </div>
        </Flex>
        <div className={cs.hoverContent}>
          <Flex alignItems="center" justifyContent="center" height="100%">
            <div>
              <NavItem>
                <NavLink to={props.detailsUrl}><Button>View Details</Button></NavLink>
              </NavItem>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
};

ListingGridView.propTypes = {
  listing: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    photoCount: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    beds: PropTypes.number.isRequired,
    baths: PropTypes.number.isRequired,
    sq: PropTypes.number.isRequired,
    dateListed: PropTypes.string.isRequired,
  }).isRequired,
  detailsUrl: PropTypes.string.isRequired,
};

export default ListingGridView;
