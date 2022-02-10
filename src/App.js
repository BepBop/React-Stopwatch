import React, { useState } from 'react';
import * as classes from './style.module.css';
import { Input } from './Input';
import { Watch } from './Watch';

export function App() {
	const [InputValue, setInputValue] = useState('');
	const [Arr, setArr] = useState(['']);
	return (
		<div className={classes.flex}>
			<Input
				Input={InputValue}
				setInput={setInputValue}
				fun={(event) => {
					setArr((prev) => [...prev, event]);
				}}
			/>
			{Arr.map((event) => (
				<>
					{event}
					<Watch />
				</>
			))}
		</div>
	);
}
