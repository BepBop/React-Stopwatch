import React, { useState } from 'react';
import * as classes from './style.module.css';
import { Input } from './Input';
import { Watch } from './Watch';

export function App() {

	const [Arr, setArr] = useState(['']);
	return (
		<div className={classes.flex}>
			<Input
				fun={(event) => {
					setArr((Arr) => [...Arr, event]);
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
