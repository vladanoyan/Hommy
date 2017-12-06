import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Carousel from '../../components/CarouselPhoto';
import CounterIn from '../../components/Counter';
import CounterDe from '../../components/Counter/CounterDe';
import ListDetals from '../../components/ListDetal';
import AddTodo from '../../components/Comment/AddTodo';
import VisibleTodoList from '../../components/Comment/VisibleTodoList';
import cs from './ListingDetails.pcss';

class ListingDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      isChecked: false,
      checkedIn: false,
      checkedDe: false,
    };
  }
  onIncrement(e) {
    this.setState({ isChecked: true },
    this.state.isChecked ? null : this.props.dispatchIn(),
    this.state.isChecked ? null : e.target.style.color = '#5f90dd',
    );
  }
  onDecrement(e) {
    this.setState({ isChecked: true },
      this.state.isChecked ? null : this.props.dispatchDe(),
      this.state.isChecked ? null : e.target.style.color = '#5f90dd',
  );
  }
  render() {
    return (
      <Container className={cs.listDetl}>
        <Row>
          <Col sm="12" md="7" xs="12">
            <Carousel />
            <CounterIn
              classActive={this.state.checkedIn ? `${cs.LikeActive}` : `${cs.Like}`}
              value={this.props.counter}
              onIncrement={this.onIncrement.bind(this)}
            />
            <CounterDe
              classActive={cs.Like}
              value={this.props.counterDe}
              onDecrement={this.onDecrement.bind(this)}
            />
            <AddTodo />
            <VisibleTodoList />
          </Col>
          <Col sm="12" md="5" xs="12">
            <ListDetals />
          </Col>
        </Row>
      </Container>
    );
  }
}


ListingDetail.propTypes = {
  dispatchIn: PropTypes.func.isRequired,
  dispatchDe: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  counterDe: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchIn: () => {
      dispatch({ type: 'INCREMENT' });
    },
    dispatchDe: () => {
      dispatch({ type: 'DECREMENT' });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    counterDe: state.counterDe,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListingDetail);
