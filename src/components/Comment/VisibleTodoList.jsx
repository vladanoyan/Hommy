import { connect } from 'react-redux';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      break;
    default:
      break;
  }
  return todos;
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};


const VisibleTodoList = connect(
  mapStateToProps,
)(TodoList);

export default VisibleTodoList;
