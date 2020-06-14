import React, { Component, useState } from 'react';
import './Marker.scss';
import MarkedItem from './MarkedItem/MarkedItem';

function Marker() {
	const [list] = useState([
		"First item",
		"Second special item",
		"Third item",
		"Fourth special item",
	]);
	const [query, setQuery] = useState('');
	return (
		<div className="Marker">
			<p>
				Display a list of all items in the state.<br />
					If the value in the input can be found within the items - <span className="marker">marker</span> it.<br />
					Example: if the input value is "elf" then item "shelf" should look like: sh<span className="marker">elf</span>.
					Apply the marker for <u>all items</u>.
				</p>

			<input type="text" placeholder="Text to marker..." onChange={(e) => setQuery(e.target.value)} />
			<ul>
				{list.map((item, i) => {
					return <MarkedItem key={i}
						item={item}
						query={query}
					/>
				})};
			</ul>
		</div>
	)

}

export default Marker;
