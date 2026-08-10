import { useState } from 'react';
import Tabs from './Tabs.jsx';
import styled from 'styled-components';

const Print = styled.div`
	display: flex;
	color: white;
	width: 100%;
	justify-content: space-around;
`;

export default function Tab_input() {
	console.log('Tab_input được render');
	const [user, setUser] = useState({ fullName: '', email: '' });
	const handleInput = (e) => {
		const { name, value } = e.target;
		setUser((preUser) => ({
			...preUser,
			[name]: value,
		}));
		console.log(user);
	};
	return (
		<Tabs title="Two-Way Binding" Container="h2" className="tab_input">
			<div>
				<input type="text" name="fullName" value={user.fullName} onChange={handleInput} />
				<input type="email" name="email" value={user.email} onChange={handleInput} />
			</div>
			<Print>
				<p>Full Name: {user.fullName}</p>
				<p>Email: {user.email}</p>
			</Print>
		</Tabs>
	);
}
