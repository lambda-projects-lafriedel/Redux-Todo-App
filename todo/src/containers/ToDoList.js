import React from "react";
import { connect } from "react-redux";
import { toggleCompleted, deleteToDo } from "../actions";

import ToDo from "../components/ToDo";
import '../components/ToDo.css';

const ToDoList = props => {
  const handleToggle = (e, id) => {
    e.preventDefault();
    props.toggleCompleted(id);
  };

  return (
    <div>
      {props.todos.map(todo => (
        <div key={todo.id} onClick={e => handleToggle(e, todo.id)}>
          <ToDo todo={todo} deleteToDo={props.deleteToDo} />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleCompleted, deleteToDo }
)(ToDoList);
