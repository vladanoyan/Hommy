import { Container, Row, Col, Collapse, Button, CardBlock, Card } from 'reactstrap';
import React from 'react';
import FilterIcon from 'react-icons/lib/ti/filter';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import FormController from '../../lib/FormController';
import Address from '../../components/ListingSearch/AdressLine';
import CheckBox from '../../components/CheckBox';
import ListingSlide from '../../components/ListingSlide/Slide';
import ListingSlideFloor from '../../components/ListingSlideFloor/Slide';
import ListingSlideArea from '../../components/ListingSlideArea/Slide';
import LiistingCheckboxnumber from '../../components/ListingCheckboxnumber';
import ListingItem from '../../components/ListingItem';
import showResults from '../../reducer/showResults';
import Sort from '../../components/MultiSelect2';
import Banner from '../../components/Banner';
import cs from './Listing.pcss';
import CheckboxBtn from '../../components/ListingCheckboxBtn/CheckboxBtn';


class Listing extends FormController {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      form: {
        private: false,
        agency: false,
        house: false,
        apartments: false,
        places: false,
        photo: false,
        sale: false,
        rent: false,
        trade: false,
        monthly: false,
        daily: false,
      },
      collapse: true,
    };
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
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
                    <form>
                      <Address />
                      <div className={cs.rentFilter}>
                        <CheckboxBtn />
                      </div>
                      <div className={cs.rentFilter}>
                        <div className={cs.checkbox}>
                          <CheckBox
                            label="Private"
                            isChecked={this.getField('private')}
                            onChange={this.handleChange('private')}
                          />
                        </div>
                        <div className={cs.checkbox}>
                          <CheckBox
                            label="Agency"
                            isChecked={this.getField('agency')}
                            onChange={this.handleChange('agency')}
                          />
                        </div>
                      </div>
                      <div className={cs.rentFilter}>
                        <div className={cs.checkbox}>
                          <CheckBox
                            label="House"
                            isChecked={this.getField('house')}
                            onChange={this.handleChange('house')}
                          />
                        </div>
                        <div className={cs.checkbox}>
                          <CheckBox
                            label="Apartments"
                            isChecked={this.getField('apartments')}
                            onChange={this.handleChange('apartments')}
                          />
                        </div>
                        <div className={cs.checkbox}>
                          <CheckBox
                            label="Places"
                            isChecked={this.getField('places')}
                            onChange={this.handleChange('places')}
                          />
                        </div>
                      </div>
                      <div className={cs.rentFilter}>
                        <div className={cs.checkbox}>
                          <CheckBox
                            label="Only with photo"
                            isChecked={this.getField('photo')}
                            onChange={this.handleChange('photo')}
                          />
                        </div>
                      </div>
                      <div className={cs.rentFilter}>
                        <div className={cs.checkboxSlide}>
                          <ListingSlideFloor />
                        </div>
                        <div className={cs.checkboxSlide}>
                          <ListingSlideArea />
                        </div>
                        <div className={cs.checkboxSlide}>
                          <ListingSlide />
                        </div>
                      </div>
                      <div className={cs.rentFilter}>
                        <div className={cs.checkbox}>
                          <CheckBox
                            label="Monthly"
                            isChecked={this.getField('monthly')}
                            onChange={this.handleChange('monthly')}
                          />
                        </div>
                        <div className={cs.checkbox}>
                          <CheckBox
                            label="Daily"
                            isChecked={this.getField('daily')}
                            onChange={this.handleChange('daily')}
                          />
                        </div>
                      </div>
                      <div className={cs.rentFilter}>
                        <div className={cs.checkbox}>
                          <LiistingCheckboxnumber />
                        </div>
                      </div>
                    </form>
                  </CardBlock>
                </Card>
              </Collapse>
              <Banner />
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

export default connect()(Listing);
