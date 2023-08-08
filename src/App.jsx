import "./style/style.css";
import { useEffect, useState } from "react";
import TasksList from "./components/TasksList";
import TaskFilter from "./TaskFilter";
import TaskFrom from "./components/TaskFrom";
import { LOCAL_TASKS_KEY } from "./constants";

function App() {
	const [ tasks, _setTasks ] = useState([]);
	const [ filteredTasks, setFilteredTasks ] = useState(tasks);

	const statuses = [
		{ id: "inProgress", text: "In progress" },
		{ id: "completed", text: "Completed" },
		{ id: "deleted", text: "Deleted" },
	];
	const defaultStatus = statuses[0].id;
	const [ selectedStatus, setSelectedStatus] = useState(defaultStatus);

	useEffect(() => {
		const tasks = JSON.parse(localStorage.getItem(LOCAL_TASKS_KEY) || "[]");
		tasks.forEach((task) => {
			task.date = new Date(task.date);
		})
		setTasks(tasks);
	}, [])

	const setTasks = (tasks) => {
		_setTasks(tasks);
		localStorage.setItem(LOCAL_TASKS_KEY, JSON.stringify(tasks));
	}

	useEffect(() => {
		setFilteredTasks([...tasks].filter(({ status }) => status === selectedStatus))
	}, [ tasks, selectedStatus ])

	const createTask = (newTask) => {
		setTasks([ ...tasks, newTask ]);
		setSelectedStatus(defaultStatus);
	};

	const changeTaskStatus = (task, status) => {
		setTasks([
			...tasks.filter((t) => t.id !== task.id),
			{ ...task, status }
		]);
	}

	return (
		<div className="App">
			<div className="content">
				<TaskFrom defaultStatus={defaultStatus} createTask={createTask} />
				<TaskFilter
					statuses={statuses}
					selectedStatus={selectedStatus}
					setSelectedStatus={setSelectedStatus}
				/>
				<TasksList tasks={filteredTasks} changeTaskStatus={changeTaskStatus} />
			</div>
		</div>
	);
}

export default App;
