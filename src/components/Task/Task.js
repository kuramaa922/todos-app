import React from 'react';
import './Task.css'


export default class Task extends React.Component {

    render() {
        const { label, complete, onCompleted,onDeleted, id } = this.props

        return (
            <div className="view">
                <input
                    id={id}
                    className="toggle"
                    checked={complete}
                    type="checkbox"
                    onChange={onCompleted}
                    />
                <label htmlFor={id}>
                <span
                    className="description"
                    onClick={onCompleted}
                >
                { label }
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
            // {/*{ this.props.className === "editing" ? (*/}
            // {/*    <input*/}
            // {/*        type="text"*/}
            // {/*        className="edit"*/}
            // {/*        defaultValue="Editing task"*/}
            // {/*    ></input>*/}
            // {/*) : null }*/}
        );
    }
}