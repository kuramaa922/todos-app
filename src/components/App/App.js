import React from "react";

import './App.css'
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer';
export default class App extends React.Component {
    tasksId = 4
    state = {
        todoData: [
            {
                label: 'Completed task',
                isCompleted: true,
                id: 1
            },
            {
                label:  'Editing task',
                isCompleted: false,
                id: 2
            },
            {
                label: 'Active task',
                isCompleted: false,
                id: 3
            }
        ]
    }


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

    render() {
        const { todoData } = this.state

        return (
            <section className="todoapp">
                <NewTaskForm />
                <TaskList
                    todos={todoData}
                    onDeleted={ this.deleteItem }
                />
                <Footer />
            </section>
        )
    }
}
