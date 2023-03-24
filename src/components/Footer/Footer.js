import React from "react";
import './Footer.css'

import TasksFilter from '../TasksFilter';

const Footer = ({tasksLeft}) => {
    return (
        <footer className="footer">
            <span className="todo-count">{tasksLeft} items left</span>
            <TasksFilter/>
            <button className="clear-completed">
                Clear completed
            </button>
        </footer>
    )
}

export default Footer