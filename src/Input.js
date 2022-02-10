import React from 'react';
import * as classes from './style.module.css';

export function Input(props) {
	const onSubmit = (event) => {
		event.preventDefault();
		props.fun(props.Input);
	};
	return (
		<form onSubmit={onSubmit}>
			<input
				placeholder="Title"
				className={classes.input}
				value={props.Input}
				onChange={(event) => props.setInput(event.target.value)}
			/>
		</form>
	);
}
