import React from "react";
import './TasksFilter.css'

const TasksFilter = ({ filterBtn, filter }) => {
    const btnNames = [
        {name: 'All', id: 1},
        {name: 'Active', id: 2},
        {name: 'Completed', id: 3}
    ]
    let buttons = btnNames.map((el) => {
        const { id, name } = el
        const isActive = filter === name
        let selected = isActive ? 'selected' : null
        return (
            <li key={id}>
                <button type='button'
                        className={selected}
                        onClick={() => filterBtn(name)}>
                    {name}
                </button>
            </li>
        )
    });

    return (
        <ul className="filters">
            {buttons}
        </ul>
    )


}

// <li>
//     <button className='selected'>All</button>
// </li>
// <li>
//     <button>Active</button>
// </li>
// <li>
//     <button>Completed</button>
// </li>
//     const title = [
//         { title: 'All', id: 1 },
//         { title: 'Completed', id: 2 },
//         { title: 'Active', id: 3 },
//     ];
//
//     let buttons = title.map((el) => {
//         const { id, title } = el;
//         const isActive = select === title;
//         let selected = isActive ? 'selected' : null;
//         return (
//             <li key={id}>
//                 <button type="button" className={selected} onClick={() => filterBtn(title)}>
//                     {title}
//                 </button>
//             </li>
//         );
//     });
//
//     return <ul className="filters">{ buttons }</ul>;
// }

export default TasksFilter;