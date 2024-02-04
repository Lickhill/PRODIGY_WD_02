import React, { useEffect, useState, useRef } from "react";

function Stopwatch() {
	const [TimerOn, setTimerOn] = useState(false);
	const [time, setTime] = useState(0);

	useEffect(() => {
		let interval = null;
		if (TimerOn) {
			interval = setInterval(() => {
				setTime((t) => t + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [TimerOn]);

	return (
		<div className="container">
			<div className="display">
				
				<span>{`0${Math.floor(time / 3600000)}`.slice(-2)}:</span>
				<span>{`0${Math.floor(time / 60000) % 60}`.slice(-2)}:</span>
				<span>{`0${Math.floor(time / 1000) % 60}`.slice(-2)}</span>
				{/* <span>{`0${Math.floor(time / 10) % 100}`.slice(-2)}</span> */}
			</div>
			<div className="controls">
				<button
					onClick={() => setTimerOn(false)}
					role="button"
					className="stopwatchButton"
				>
					Stop
				</button>
				<button
					onClick={() => setTimerOn(true)}
					role="button"
					className="stopwatchButton"
				>
					Start
				</button>
				<button
					onClick={() => setTime(0)}
					role="button"
					className="stopwatchButton"
				>
					Reset
				</button>
			</div>
		</div>
	);
}

export default Stopwatch;
