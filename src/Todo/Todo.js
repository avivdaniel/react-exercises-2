

import React, { Component, useState, useRef } from 'react';
import './Todo.scss';
import TaskItem from './TaskItem/TaskItem';



function Todo() {
	const [taskList, setTaskList] = useState([]);
	const [input, setInput] = useState('');
	let taskInput = (e) => {
		const { value } = e.target;
		setInput(value);
	};
	const addTask = (e) => {
		e.preventDefault();
		if (input !== '') {
			setTaskList([...taskList, input]);
		}
		e.target.reset()

	}
	const deleteTask = (index) => {
		let newTaskList = [...taskList]
		newTaskList.splice(index, 1);
		setTaskList(newTaskList);
	}
	return (
		<div className="Todo">
			<h3>Todo List:</h3>
			<p>Make a Todo list (add & delete options):</p>

			<form onSubmit={addTask}>
				<input placeholder="Your task..." onChange={taskInput} /><button>Add task</button>
			</form>

			<ul>
				{taskList
					.map((task, i) => {
						return <TaskItem
							key={i}
							task={task}
							index={i}
							onDelete={deleteTask} />
					})}
			</ul>
		</div>
	)
}

export default Todo;
