import './App.css';
import Header from './Components/Header/Header.jsx';
import Main from './Components/MainContent/Main_Information.jsx';
import { useState } from 'react';

function App() {
	const [hello, setHello] = useState('Xin chào');
	const [selectedTopic, setSelectedTopic] = useState('components');
	function handleClick(selectHandle) {
		setSelectedTopic(selectHandle);
	}
	let getCurrentHour = () => new Date().getHours();

	let prinHello = () => {
		let hour = getCurrentHour();
		console.log(hour);
		if (hour >= 5 && hour <= 12) return setHello('Chào buổi sáng!');
		else if (hour > 12 && hour <= 18) return setHello('Chào buổi chiều!');
		else return setHello('Chào buổi tối!');
	};

	return (
		<>
			<Header />
			<Main onSelect={handleClick} prinHello={prinHello} hello={hello} slTopic={selectedTopic} />
		</>
	);
}
export default App;
