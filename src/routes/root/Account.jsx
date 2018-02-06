import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import AcSet from 'react-icons/lib/fa/cogs';
import Plus from 'react-icons/lib/fa/plus';
import Heart from 'react-icons/lib/fa/heart';
import Listing from 'react-icons/lib/fa/building';
import AsyncValidationForm from '../../components/AccountSetting';
import FileUploader from '../../components/Form/FileInputRedux';
import AddListingUser from '../../components/AddListingUser';
import showResults from '../../reducer/showResults';
import ListingItem from '../../components/ListingItem';
import cs from './Account.pcss';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      modalIsOpen: false,
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
  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    });
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
          <div className={cs.pageHeight}>
            <Row className={this.state.activeTab === 1 ? `${cs.activeBlock}` : `${cs.block}`}>
              <Col sm="8" xs="12" md="8">
                <h4 className={cs.title}>Your listings list</h4>
              </Col>
              <Col sm="4" xs="12" md="4" className="text-right">
                <div
                  role="presentation"
                  onClick={this.toggleModal.bind(this)}
                  className={cs.AddListingText}
                >
                  Add Listing
                  <Plus className={cs.iconPlus} />
                </div>
                <AddListingUser
                  modal={this.state.modalIsOpen}
                  toggle={this.toggleModal.bind(this)}
                />
              </Col>
              <Col sm="12" xs="12" md="12">
                <ListingItem />
              </Col>
            </Row>
            <Row className={this.state.activeTab === 2 ? `${cs.activeBlock}` : `${cs.block}`}>
              <Col sm="12">
                <h4 className={cs.title}>Your favorite listings</h4>
              </Col>
              <Col sm="12">
                <ListingItem />
              </Col>
            </Row>
            <Row className={this.state.activeTab === 3 ? `${cs.activeBlock}` : `${cs.block}`}>
              <Col sm="12">
                <h4 className={cs.title}>Modify your settings</h4>
              </Col>
              <Col xs="12" md="6" sm="6">
                <div className="text-center">
                  <FileUploader />
                </div>
              </Col>
              <Col xs="12" md="6" sm="6">
                <AsyncValidationForm onSubmit={showResults} />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Account;
