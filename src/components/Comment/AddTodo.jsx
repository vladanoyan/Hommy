import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../actions';
import cs from './component.pcss';

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <div className={cs.Comment}>
        Leave Reviews
      </div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}
      >
        <input
          className={cs.CommentInput}
          ref={node => {
            input = node;
          }}
        />
        <button className={cs.CommentBtn} type="submit">
         Post
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
