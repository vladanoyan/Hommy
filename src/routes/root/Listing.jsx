import { Container, Row, Col, Collapse, Button, CardBlock, Card } from 'reactstrap';
import React from 'react';
import FilterIcon from 'react-icons/lib/ti/filter';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from '../../components/MyAwesomeReactComponent';
import FormController from '../../lib/FormController';
import Address from '../../components/ListingSearch/AdressLine';
import ListingSlide from '../../components/ListingSlide/Slide';
import RangeSlider from '../../components/RangeSlider';
import ListingSlideArea from '../../components/ListingSlideArea/Slide';
import ListingSlideFloor from '../../components/ListingSlideFloor/Slide';
import LiistingCheckboxnumber from '../../components/ListingCheckboxnumber';
import ListingItem from '../../components/ListingItem';
import showResults from '../../reducer/showResults';
import Sort from '../../components/MultiSelect2';
import Banner from '../../components/Banner';
import CheckboxBtn from '../../components/ListingCheckboxBtn/CheckboxBtn';
import cs from './Listing.pcss';

const theme1 = getMuiTheme({
  slider: {
    selectionColor: '#5f90dd',
    trackSize: 5,
    handleSize: 16,
    handleSizeActive: 20,
    rippleColor: '#5f90dd',
  },
});

class Listing extends FormController {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      form: {
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
                        <MuiThemeProvider muiTheme={theme1}>
                          <RangeSlider textSlider="Floor" min={0} max={100} />
                        </MuiThemeProvider>
                      </div>
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
                      <MyAwesomeReactComponent name="Monthly" label="Monthly" />
                      <MyAwesomeReactComponent name="Daily" label="Daily" />
                    </div>
                    <div className={cs.rentFilter}>
                      <div className={cs.checkbox}>
                        <LiistingCheckboxnumber />
                      </div>
                    </div>
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

export default (Listing);
