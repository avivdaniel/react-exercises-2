import React, { useState, useEffect } from 'react';
import './Hits.scss';

function Hits() {
	const [hists, setHists] = useState([]);
	useEffect(() => {
		fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/hits.json')
			.then(res => res.json())
			.then(data => setHists(data))
	});

	return (
		<div className="Hits">
			<h3>Hits:</h3>
			<p>
				Use the following API to make a list of hit titles:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/hits.json</code>
			</p>
			<ul>
				{hists.map((hit, index) => {
					return <li key={index}>{hit.title}</li>
				})}
			</ul>
		</div>
	)
}

export default Hits;
