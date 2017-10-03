import { Container, Row, Col } from 'reactstrap';
import React from 'react';
import Address from '../../components/AdressLine';
import CheckboxBtn from '../../components/HomepageSelected';
import BackgroundContainer from '../../components/BackgroundContainer';
import NavBar from '../../components/NavBar';
import Social from '../../components/Social/index';
import cs from './HomePage.pcss';

class HomePage extends React.Component {
  render() {
    return (
      <BackgroundContainer>
        <NavBar />
        <div className={cs.base}>
          <div className={cs.hompage}>
            <div className={cs.cont}>
              <Container>
                <Row className="text-center" >
                  <h1 className={cs.Title}>Find Your Home</h1>
                </Row>
                <div className={cs.root}>
                  <Row>
                    <Col className={cs.Search}>
                      <Address />
                    </Col>
                  </Row>
                  <Row className="text-center" >
                    <Col className={cs.Search}>
                      <CheckboxBtn />
                    </Col>
                  </Row>
                </div>
              </Container>
              <Social />
            </div>
          </div>
        </div>
      </BackgroundContainer>
    );
  }
}

export default HomePage;
