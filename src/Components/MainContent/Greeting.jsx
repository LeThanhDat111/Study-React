import { useState } from 'react';
export default function Greeting() {
	const [hello, setHello] = useState('Xin chào');
	let getCurrentHour = () => new Date().getHours();
	let prinHello = () => {
		let hour = getCurrentHour();
		if (hour >= 5 && hour <= 12) setHello('Chào buổi sáng!');
		else if (hour > 12 && hour <= 18) setHello('Chào buổi chiều!');
		else setHello('Chào buổi tối!');
		console.log(hello);
	};

	return (
		<div className="state">
			<h3 className="txt_Hello">{hello}</h3>
			<button className="btn_State" onClick={prinHello}>
				Cập nhật lời chào
			</button>
		</div>
	);
}
