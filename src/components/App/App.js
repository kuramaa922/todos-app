import React from "react";

import './App.css'
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer';
export default class App extends React.Component {

    state = {
        todoData: [
            {
                label: 'Completed task',
                done: true,
                id: 1
            },
            {
                label:  'Active task',
                done: false,
                id: 2
            },
            // {
            //     label: 'Active task',
            //     isCompleted: false,
            //     id: 3
            // }
        ]
    }
    tasksId = 3

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id)
            const newArr = [...todoData]
            newArr.splice(idx, 1)

            return {
                todoData: newArr
            }
        })
    }
    onCompleted = (id) => {
        this.setState(({ todoData }) => {
            let completed = todoData.map((todo) => {
                if (todo.id !== id) return todo;
                return {
                    ...todo,
                    done: !todo.done,
                };
            });
            return { todoData: completed };
        });
    };

    render() {
        const { todoData } = this.state
        const doneCount = todoData.filter((el) => el.done).length
        const tasksLeft = todoData.length - doneCount

        return (
            <section className="todoapp">
                <NewTaskForm />
                <TaskList
                    todos={todoData}
                    onCompleted={this.onCompleted}
                    onDeleted={ this.deleteItem }
                />
                <Footer
                    tasksLeft={tasksLeft}
                />
            </section>
        )
    }
}
