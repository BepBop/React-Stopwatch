import { useEffect, useState } from "react";
import * as classes from "./style.module.css";

export function Watch() {
	const [Sec, setSec] = useState(0);

	const [Hand, setHand] = useState(0);
	const [Flag, setFlag] = useState(false);

	if (Sec === 60) {
		setSec(0);
		setHand(Hand + 1);
	}

	useEffect(() => {
		if (Flag) {
			const time = setTimeout(() => {
				setSec(Sec + 1);
			}, 1000);
			return () => {
				clearTimeout(time);
			};
		}
	});

	return (
		<div className={classes.flex}>
			<h1>{`${Hand} Min : ${Sec} Sec`}</h1>
			<button
				type="button"
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
