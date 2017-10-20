import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import cs from './component.pcss';

let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <div className={cs.Comment}>
        Leave Your Comment
      </div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value));
        input.value = ''
      }}
      >
        <input
          className={cs.CommentInput}
          ref={node => {
            input = node
          }}
        />
        <button className={cs.CommentBtn} type="submit">
         Post
        </button>
      </form>
    </div>
  )
};
AddTodo = connect()(AddTodo);

export default AddTodo;
