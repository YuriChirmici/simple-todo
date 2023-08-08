import { useState } from "react";
import MyButton from "./UI/button/MyButton"
import MyInput from "./UI/input/MyInput"

const TaskFrom = ({ defaultStatus, createTask }) => {
	const [ taskText, setTaskText ] = useState("");

	const onCreateTask = () => {
		if (!taskText) {
			return;
		}

		const date = Date.now();
		const newTask = {
			text: taskText,
			status: defaultStatus,
			date: new Date(date),
			id: date
		};

		createTask(newTask);

		setTaskText("");
	};

	return (
		<div className="create__buttons">
			<MyInput
				value={taskText}
				onChange={(e) => setTaskText(e.target.value) }
				placeholder="Enter task text..."
			/>
			<MyButton onClick={onCreateTask}> Create </MyButton>
		</div>
	)
}

export default TaskFrom