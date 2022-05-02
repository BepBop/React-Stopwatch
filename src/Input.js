import {useState} from "react";
import * as classes from "./style.module.css";

export function Input(props) {

	const [inputValue, set_inputValue] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		props.fun(inputValue);
	};
	return (
		<form onSubmit={onSubmit}>
			<input
				placeholder="Title"
				className={classes.input}
				value={inputValue}
				onChange={(event) => set_inputValue(event.target.value)}
			/>
		</form>
	);
}
