import React from 'react';
import PropTypes from 'prop-types';
import Pic from '../../resource/images/profile-pic.png';
import cs from './TodoList.pcss';

const TodoList = ({ todos }) => (
  <ul className={cs.ulCom}>{todos.map(todo => (
    <li
      key={todo.id}
      className={cs.liCom}
    >
      <img className={cs.img} src={Pic} alt="user" />
      {todo.text}
    </li>),
  )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
      PropTypes.shape({
      }).isRequired,
  ).isRequired,
};

export default TodoList;
