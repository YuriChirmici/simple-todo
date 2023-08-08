import cl from './MyInput.module.css'

const MyInput = (props) => {
	return (
		<input {...props} className={[ props.className, cl.myInput ].join(" ")} />
	)
}

export default MyInput