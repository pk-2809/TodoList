import React, { useState } from 'react';
import { ReactComponent as BinTop } from '../../assets/bin-top.svg';
import { ReactComponent as BinBottom } from '../../assets/bin-bottom.svg';
import './Tasks.css';

export const Tasks = () => {

    let [isAddClick, setIsAddClick] = useState(false);
    let [newTask, setNewTask] = useState('');

    let [task, setTasks] = useState([]);

    function deleteTask(id) {
        setTasks(task.filter(t => t.id !== id));
    };

    const onAddClick = () => {
        setIsAddClick(!isAddClick);
    };

    const onMarkComplete = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, complete: !task.complete } : task
            )
        );
    };

    const onInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const onAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks((task) => [...task, { id: Math.floor(Math.random() * 10000), name: newTask, complete: false }]);
            setNewTask('');
        }
        setIsAddClick(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onAddTask();
        }
    };

    return (
        <>
            <div className="bg-3 h-full flex justify-center items-center">
                <div className="bg-2 w-full h-3/5 flex flex-col max-w-64 sm:max-w-md md:max-w-2xl rounded-lg">
                    <div className='flex p-4 justify-between items-center rounded-t-lg bg-white'>
                        <p className="text-xl sm:text-3xl md:text-4xl list-head color-1">My List</p>
                        <button className="btn" onClick={onAddClick}>Add Task</button>
                    </div>
                    {(task.length > 0 || isAddClick) && <div id="checklist" className='m-5 flex flex-col overflow-y-auto'>

                        <div className='list-container mb-2 flex items-center'>
                            {isAddClick && <input type="text" name="text" className="input flex-1" placeholder="Add Your New Task Here..." value={newTask} onChange={onInputChange} onBlur={onAddTask} onKeyDown={handleKeyDown} />}
                        </div>
                        {task.map((t) => (
                            <div className='list-container mb-1 flex items-center' key={t.id} onClick={() => onMarkComplete(t.id)}>
                                <div className='checkBox basis-full mr-2'>
                                    <input type="checkbox" id={t.id} checked={t.complete} onChange={(e) => e.stopPropagation()} />
                                    <label htmlFor={t.id}>{t.name}</label>
                                </div>
                                <button className="bin-button" onClick={() => deleteTask(t.id)}>
                                    <BinTop /><BinBottom />
                                </button>
                            </div>
                        ))}

                    </div>}
                </div>

            </div>
        </>
    )
}
