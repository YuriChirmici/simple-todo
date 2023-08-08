import MyButton from "./components/UI/button/MyButton"

const TaskFilter = ({ statuses, selectedStatus, setSelectedStatus }) => {
	return (
		<div className="task__tabs">
			{ statuses.map((s) => 
				<MyButton
					key={s.id}
					customProps={{ isActive: selectedStatus === s.id  }}
					onClick={() => setSelectedStatus(s.id)}
				>
					{s.text}
				</MyButton>
			)}
		</div>
	)
}

export default TaskFilter