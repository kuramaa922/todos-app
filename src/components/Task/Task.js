import React from 'react';
import './Task.css'


export default class Task extends React.Component {

    render() {
        const { todos, label, todoClass, isCompleted, onDeleted, id } = this.props

        return (
            <li className={ isCompleted ? 'completed' : 'active' }>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        id={id}/>
                    <label htmlFor={id}>
                    <span className="description">
                    { todoClass === "completed"
                        ? "Completed task"
                        : "Active task" }
                    </span>
                    <span className="created">
                        Created 5 minutes ago
                    </span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button
                        className="icon icon-destroy"
                        onClick={onDeleted}
                    ></button>
                </div>
                { todoClass === "editing" ? (
                    <input
                        type="text"
                        className="edit"
                        defaultValue="Editing task"
                    ></input>
                ) : null }
            </li>
        );
    }
}