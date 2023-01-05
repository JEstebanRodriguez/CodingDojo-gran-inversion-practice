import React from 'react'
const PersonCard = ({ firstName, lastName, age, hairColor }) => {
	return (
		<div style={{ marginBottom: '2rem' }}>
			<h1>
				{lastName}, {firstName}
			</h1>
			<p>Age: {age}</p>
			<p>Hair Color: {hairColor}</p>
		</div>
	)
}
export default PersonCard
