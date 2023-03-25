import React from "react";
import './Footer.css'

import TasksFilter from '../TasksFilter';

const Footer = ({tasksLeft, clearCompleted, filterBtn, filter}) => {
    return (
        <footer className="footer">
            <span className="todo-count">{tasksLeft} items left</span>
            <TasksFilter filterBtn={filterBtn} filter={filter}/>
            <button
                className="clear-completed"
                onClick={clearCompleted}
            >
                Clear completed
            </button>
        </footer>
    )
}

export default Footer