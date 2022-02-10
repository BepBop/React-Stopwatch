import React, { useEffect, useState } from 'react';
import * as classes from './style.module.css';

export function Watch() {
	const [Sec, setSec] = useState(0);

	const [Hand, setHand] = useState(0);
	const [Flag, setFlag] = useState(false);

	if (Sec === 60) {
		setSec(0);
		setHand(Hand + 1);
	}

	function call() {
		setTimeout(() => {
			setSec(Sec + 1);
		}, 1000);
	}

	useEffect(() => {
		if (Flag) {
			call();
		}
	}, [Sec, Flag]);

	return (
		<div className={classes.flex}>
			<h1>{`${Hand} Min : ${Sec} Sec`}</h1>
			<button
				className={classes.button}
				onClick={() => {
					setFlag(!Flag);
				}}
			>
				Click Me!
			</button>
		</div>
	);
}
