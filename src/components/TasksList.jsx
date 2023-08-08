import TaskItem from './TaskItem';

const TasksList = ({ tasks, changeTaskStatus }) => {
	if (!tasks.length) {
		return <h2> No tasks </h2>
	}
	return (
		<div>
			{ tasks.map((task, i) =>
				<TaskItem
					key={task.id}
					task={task}
					index={i + 1}
					changeStatus={changeTaskStatus}
				/>
			)}
		</div>
	)
}

export default TasksList