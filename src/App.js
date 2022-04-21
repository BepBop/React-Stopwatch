import React, { useState, useEffect } from 'react';
import './App.scss';

export function App() {
	const [Sec, setSec] = useState(0);

	const [Hand, setHand] = useState(0);
	const [Flag, setFlag] = useState(false);

	if (Sec === 60) {
		setSec(0);
		setHand(Hand + 1);
	}

	useEffect(() => {
		if (Flag) {
			const id = setInterval(() => {
				setSec((sec) => sec + 1);
			}, 1000);

			return () => {
				clearInterval(id);
			};
		}
	}, [Flag]);

	return (
		<>
			<div className="time">{`${Hand} : ${Sec} `}</div>

			<div className="buttons">
				<button
					type="button"
					onClick={() => {
						setFlag(!Flag);
					}}
				>
					<div>{Flag ? '▶️' : '⏸️'} </div>
				</button>
			</div>
		</>
	);
}
