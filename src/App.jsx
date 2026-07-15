import './App.css';
import Header from './Components/Header/Header.jsx';
import Main from './Components/MainContent/Main_Information.jsx';
import { useState } from 'react';

function App() {
	const [hello, setHello] = useState('Xin chào');
	function handleClick(selectHandle) {
		alert('Đã cick ' + selectHandle);
	}
	// let getCurrentHour = () => new Date().getHours();
	console.log(hello);
	let prinHello = () => {
		let hour = randomHour();
		console.log(hour);
		if (hour >= 5 && hour <= 12) return setHello('Chào buổi sáng!');
		else if (hour > 12 && hour <= 18) return setHello('Chào buổi chiều!');
		else return setHello('Chào buổi tối!');
	};

	function randomHour() {
		return Math.floor(Math.random() * 24);
	}
	return (
		<>
			<Header />
			<Main onSelect={handleClick} prinHello={prinHello} hello={hello} />
		</>
	);
}
export default App;
