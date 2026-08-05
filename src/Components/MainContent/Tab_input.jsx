import { useState } from 'react';
import Tabs from './Tabs.jsx';

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
		<Tabs title="Two-Way Binding" Container="h2">
			<input type="text" name="fullName" value={user.fullName} onChange={handleInput} />
			<input type="email" name="email" value={user.email} onChange={handleInput} />
			<p>Full Name: {user.fullName}</p>
			<p>Email: {user.email}</p>
		</Tabs>
	);
}
