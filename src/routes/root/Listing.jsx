import { Container, Row, Col, Collapse, Button, CardBlock, Card } from 'reactstrap';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilterIcon from 'react-icons/lib/ti/filter';
import MyAwesomeReactComponent from '../../components/MyAwesomeReactComponent';
import FormController from '../../lib/FormController';
import Address from '../../components/ListingSearch/AdressLine';
import ListingSlideFloor from '../../components/ListingSlideRange/Slide';
import LiistingCheckboxnumber from '../../components/ListingCheckboxnumber';
import ListingItem from '../../components/ListingItem';
import showResults from '../../reducer/showResults';
import Sort from '../../components/MultiSelect2';
import Banner from '../../components/Banner';
import CheckboxBtn from '../../components/ListingCheckboxBtn/CheckboxBtn';
import MinMax from '../../components/ListingMinMaxInput';
import cs from './Listing.pcss';

class Listing extends FormController {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: true,
      value: { min: 0, max: 100 },
    };
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    const handleChange = (e) => {
      const listCheched = [...e];
      return listCheched;
    };
    return (
      <div>
        <Container fluid className={cs.listingBackground}>
          <Row>
            <Col xs="12" md="3" sm="4" className={cs.Search}>
              <div className={cs.filterDiv}>
                <Button onClick={this.toggle} className={cs.filterBtn}>
                  <FilterIcon className={cs.filterIcon} />Filter</Button>
              </div>
              <Collapse isOpen={this.state.collapse} className={cs.collapse}>
                <Card>
                  <CardBlock className={cs.CardBlock}>
                    <Address />
                    <div className={cs.rentFilter}>
                      <CheckboxBtn />
                    </div>
                    <div className={cs.rentFilter}>
                      <MyAwesomeReactComponent name="Private" label="Private" />
                      <MyAwesomeReactComponent name="Agency" label="Agency" />
                    </div>
                    <div className={cs.rentFilter}>
                      <MyAwesomeReactComponent name="House" label="House" />
                      <MyAwesomeReactComponent name="Apartments" label="Apartments" />
                      <MyAwesomeReactComponent name="Places" label="Places" />
                    </div>
                    <div className={cs.rentFilter}>
                      <MyAwesomeReactComponent name="Photo" label="Only with photo" />
                    </div>
                    <div className={cs.rentFilter}>
                      <div className={cs.checkboxSlide}>
                        <ListingSlideFloor
                          min={0}
                          max={100}
                          textSlider={'Floor'}
                          value={this.state.value}
                          onChange={value => this.setState({ value })}
                        />
                      </div>
                      <div className={cs.checkboxSlide}>
                        <MinMax
                          min={'-'}
                          max={'$'}
                          nameMax={'priceNameMax'}
                          nameMin={'priceNameMin'}
                          textSlider={'Price'}
                        />
                      </div>
                      <div className={cs.checkboxSlide}>
                        <MinMax
                          min={'-'}
                          max={'sq'}
                          nameMax={'areaNameMax'}
                          nameMin={'areaNameMin'}
                          textSlider={'Total Area'}
                        />
                      </div>
                    </div>
                    <div className={cs.rentFilter}>
                      <MyAwesomeReactComponent name="Monthly" label="Monthly" />
                      <MyAwesomeReactComponent name="Daily" label="Daily" />
                    </div>
                    <div className={cs.rentFilter}>
                      <div className={cs.checkbox}>
                        <LiistingCheckboxnumber
                          onClick={() => this.props.dispatchList()}
                          list={this.props.list}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </CardBlock>
                </Card>
              </Collapse>
              <div className={cs.banner}>
                <Banner />
              </div>
            </Col>
            <Col xs="12" md="9" sm="8">
              <Col
                sm="12"
                md={{ size: 8, offset: 2 }}
                className={cs.floatRight}
              >
                <Sort onSubmit={showResults} />
              </Col>
              <ListingItem />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


Listing.propTypes = {
  dispatchList: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchList: () => {
      dispatch({ type: 'GET_LIST' });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    list: state.radioDispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Listing);
