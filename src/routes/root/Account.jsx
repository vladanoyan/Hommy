import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import AcSet from 'react-icons/lib/fa/cogs';
import Heart from 'react-icons/lib/fa/heart';
import Listing from 'react-icons/lib/fa/building';
import ListingItem from '../../components/ListingItem';
import cs from './Account.pcss';


class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
    };
    this.activeTab = this.activeTab.bind(this);
  }

  activeTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    const value = this.state.activeTab;
    const getClass = (name, item) => {
      if (item === value) {
        return `${name} ${cs.activTab}`;
      }
      return name;
    };
    return (
      <div>
        <Container>
          <Row className={cs.tabs}>
            <Col xs="12" md="4" sm="12" className="text-center">
              <div
                role="presentation"
                onClick={() => this.activeTab(1)}
                className={getClass(`${cs.linkAccountTabs}`, 1)}
              >
                <Listing className={cs.icon} />My Listings
              </div>
            </Col>
            <Col xs="12" md="4" sm="12" className="text-center">
              <div
                role="presentation"
                onClick={() => this.activeTab(2)}
                className={getClass(`${cs.linkAccountTabs}`, 2)}
              >
                <Heart className={cs.icon} />My favorites
              </div>
            </Col>
            <Col xs="12" md="4" sm="12" className="text-center">
              <div
                role="presentation"
                onClick={() => this.activeTab(3)}
                className={getClass(`${cs.linkAccountTabs}`, 3)}
              >
                <AcSet className={cs.icon} />Account setting
              </div>
            </Col>
          </Row>
          <Row className={this.state.activeTab === 1 ? `${cs.activeBlock}` : `${cs.block}`}>
            <Col sm="12">
              <h4>Tab 111 Contents</h4>
            </Col>
          </Row>
          <Row className={this.state.activeTab === 2 ? `${cs.activeBlock}` : `${cs.block}`}>
            <Col sm="12">
              <ListingItem />
            </Col>
          </Row>
          <Row className={this.state.activeTab === 3 ? `${cs.activeBlock}` : `${cs.block}`}>
            <Col sm="12">
              <h4>Tab 333 Contents</h4>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Account;
