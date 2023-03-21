import React from "react";
import './NewTaskForm.css';

export default class NewTaskForm extends React.Component {
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    className="new-todo"
                    placeholder='What needs to be done?'
                    size='50'
                    autoFocus
                    required
                />
            </header>
        )
    }
}