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

class Contact extends React.Component {

  render() {
    return (
      <Container className={cs.listDetl}>
        <Row>
          <Col sm="12" md="7" xs="12">
            <Carousel />
            <CounterIn
              value={this.props.counter}
              onIncrement={() => this.props.dispatchIn()}
            />
            <CounterDe
              value1={this.props.counterDe}
              onDecrement={() => this.props.dispatchDe()}
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


Contact.propTypes = {
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
)(Contact);
