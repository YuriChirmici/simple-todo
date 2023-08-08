import MyButton from "./UI/button/MyButton"

const TaskItem = ({ task, changeStatus, index }) => {
	let dateFormatted = task.date.toISOString().split("T");
	dateFormatted = [dateFormatted[0], dateFormatted[1].split(".")[0]].join(" ");

	return (
		<div className="taskItem">
			<div> {index}. {task.text} ({dateFormatted})</div>
			<div>
			{ task.status === "inProgress" &&
				<MyButton onClick={() => changeStatus(task, "completed")}>
					Complete
				</MyButton>
			}
			{ task.status !== "deleted" &&
				<MyButton onClick={() => changeStatus(task, "deleted")}>
					x
				</MyButton>
			}
			</div>
		</div>
	)
}

export default TaskItem