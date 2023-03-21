import React from "react";
import { subMinutes, subSeconds, formatDistanceToNow } from "date-fns";

import Task from "../Task";
import './TaskList.css'


export default class TaskList extends React.Component {
    render() {
        const { todos, onDeleted } = this.props

        const todoClasses = ['completed', 'editing']
        // const createdAgo = [
        //     formatDistanceToNow(subSeconds(new Date(), 17), new Date()),
        //     formatDistanceToNow(subMinutes(new Date(), 5), new Date())
        // ]

        const elements = todos.map((item) => {
            const { id, isCompleted, ...itemProps } = item

            return (
                <Task
                    key={id}
                    isCompleted={isCompleted}
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                />
            )
        })

        return (
            <section className="main">
                <ul className="todo-list">
                    { elements }
                    {/*<Task*/}
                    {/*    todoClass={todoClasses[0]}*/}

                    {/*    // timeAgo={createdAgo[0]}*/}
                    {/*/>*/}
                    {/*<Task*/}
                    {/*    todoClass={todoClasses[1]}*/}
                    {/*    // timeAgo={createdAgo[1]}*/}
                    {/*/>*/}
                    {/*<Task*/}
                    {/*    // timeAgo={createdAgo[1]}*/}
                    {/*/>*/}
                </ul>
            </section>
        )
    }
}

