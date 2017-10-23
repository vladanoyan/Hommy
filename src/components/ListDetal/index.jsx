import React from 'react';
import { Modal as BootstrapModal, ModalBody, Card, Collapse } from 'reactstrap';
import Location from 'react-icons/lib/go/location';
import Cloes from 'react-icons/lib/fa/close';
import IconMail from 'react-icons/lib/md/mail-outline';
import IconCall from 'react-icons/lib/md/phone-in-talk';
import Phone from 'react-icons/lib/fa/phone';
import Fax from 'react-icons/lib/fa/fax';
import SyncValidationFormListDetal from '../SyncValidationFormListDetal';
import Pic from '../../resource/images/profile-pic.png';
import showResults from '../../reducer/showResults';
import cs from './component.pcss';

const list = [
  {
    name: 'Beds',
    number: 4,
    id: 1,
  },
  {
    name: 'Baths',
    number: 3,
    id: 2,
  },
  {
    name: 'Sq',
    number: 4000,
    id: 3,
  },
];

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleCall = this.toggleCall.bind(this);
    this.state = {
      nestedModal: false,
      modal: false,
      collapse: false,
      collapseCall: false,
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  toggleCall() {
    this.setState({ collapseCall: !this.state.collapseCall });
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
    });
  }
  render() {
    const listItems = list.map(item =>
      <li key={item.id}>{item.name} : {item.number}</li>,
    );
    return (
      <div>
        <div className={cs.head}>
          <div className={cs.paragraf}>
            <h3 className={cs.h3}>Sale a villa</h3>
          </div>
          <div className={cs.paragrafPrice}>
            <h3 className={cs.pr}>1 500 000 $</h3>
          </div>
        </div>
        <div className={cs.adress}>
          <h3 className={cs.h3}>15 Green Side</h3>
          <h4 className={cs.h4}>Campebellburg,  KY  4c590</h4>
          <div role="presentation" className={cs.icondiv} onClick={this.toggleNested.bind(this)}>
            <Location className={cs.location} />
          </div>
          <BootstrapModal
            className={cs.modalDialog}
            isOpen={this.state.nestedModal}
            toggle={this.toggleNested.bind(this)}
          >
            <ModalBody className={cs.modalContent}>
              <Cloes className={cs.cloes} onClick={this.toggleNested.bind(this)} />
              <div>
                <iframe title="Map" className={cs.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48782.183738117616!2d44.450962601710856!3d40.1670810740494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2z1LXWgNaH1aHVtiwg1YDVodW11aHVvdW_1aHVtg!5e0!3m2!1shy!2s!4v1508770330294" />
              </div>
            </ModalBody>
          </BootstrapModal>
        </div>
        <div className={cs.discription}>
          <h3 className={cs.dp}>Description</h3>
          <p className={cs.p}>
              Lorem Ipsum is simply dummy text of the printing.
              Lorem Ipsum has been the standard dummy text 1500s,
              when an unknown printer took a galley of type and scrambled specimen book.
              It has survived not only five centuries.
          </p>
          <p className={cs.p}>
              Lorem Ipsum is simply dummyd typesetting industry.
              Lorem Ipsum has been the indutext ever since the 1500s,
              when an unkgalley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries.
          </p>
        </div>
        <div className={cs.listItem}>
          <ul>
            {listItems}
          </ul>
        </div>
        <div className="text-center">
          <img className={cs.img} src={Pic} alt="user" />
          <div className={cs.Name}>Name Company</div>
        </div>
        <div className={cs.formMessage}>
          <button className={cs.ms} onClick={this.toggleCall}>Call
            <IconCall className={cs.iconCall} />
          </button>
          <Collapse isOpen={this.state.collapseCall}>
            <Card className={cs.card}>
              <div className={cs.pe}>
                <Phone className={cs.iconCall} />
                +818-000-000-000
              </div>
              <div className={cs.pe2}>
                <Fax className={cs.iconCall} />
                +818-000-000-000
              </div>
            </Card>
          </Collapse>
          <button className={cs.ms} onClick={this.toggle}>Message
            <IconMail className={cs.iconMail} />
          </button>
          <Collapse isOpen={this.state.collapse}>
            <Card className={cs.card}>
              <SyncValidationFormListDetal onSubmit={showResults} />
            </Card>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default Contact;
