import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

import Task from '../Task';

import './TaskList.css';

export default function TaskList(props) {
  const { todos, onCompleted, onDeleted } = props;

  const elements = todos.map((item) => {
    const { id, label, done, time } = item;
    const className = classNames({
      completed: done,
      active: !done,
    });

    return (
      <li key={id} className={className}>
        <Task
          label={label}
          complete={done}
          time={time}
          onCompleted={() => onCompleted(id)}
          onDeleted={() => onDeleted(id)}
        />
      </li>
    );
  });

  return (
    <section className="main">
      <ul className="todo-list">{elements}</ul>
    </section>
  );
}

TaskList.defaultProps = {
  todos: [],
  onCompleted: () => {},
  onDeleted: () => {},
};

TaskList.propTypes = {
  todos: propTypes.arrayOf(propTypes.object),
  onCompleted: propTypes.func,
  onDeleted: propTypes.func,
};
