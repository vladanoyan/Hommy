import { connect } from 'react-redux';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    default:
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const VisibleTodoList = connect(
  mapStateToProps,
)(TodoList);

export default VisibleTodoList;
