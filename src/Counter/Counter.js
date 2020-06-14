import React, { useState } from 'react';
import './Counter.scss';

function Counter() {
	const [num, setNum] = useState(0);
	const increase = () => {
		setNum(num + 1)
	}
	const decrease = () => {
		setNum(num - 1)
	}
	return (
		<div className="Counter">
			<p>Make the button increase the value:</p>
			<button onClick={increase}>Increase</button>
			<button onClick={decrease}>Decrease</button>
			<div className="Counter__value">{num}</div>
		</div>
	)
}

export default Counter;
