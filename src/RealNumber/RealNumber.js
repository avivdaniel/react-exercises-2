import React, { Component, useState } from 'react';
import './RealNumber.scss';

function RealNumber() {
	const [isValid, setIsValid] = useState(false);
	const checkIsValid = (e) => {
		const { value } = e.target;
		let isNum = /^\d+$/.test(value);
		if (isNum) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	}
	return (
		<div className="RealNumber">
			<p>
				The button near the input should be visible only if the input contains <u>only</u> numbers.
					Examples:<br />
					"238764" - <span className="value--valid">valid</span> <br />
					"A13" - <span className="value--invalid">invalid</span>
			</p>

			<input type="text" className="text-box" onChange={checkIsValid} />
			{isValid && <button>Submit</button>}

		</div>
	)
}

export default RealNumber;
