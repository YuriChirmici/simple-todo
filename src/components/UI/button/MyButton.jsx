import cl from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {
	const customProps = props.customProps || {};
	delete props.customProps;

	const classes = [ props.className, cl.myButton ];
	if (customProps.isActive) {
		classes.push(cl.active)
	}

 	return (
		<button {...props} className={classes.join(" ")}>
			{ children }
		</button>
	)
}

export default MyButton