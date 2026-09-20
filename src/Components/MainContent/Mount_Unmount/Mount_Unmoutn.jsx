import { useEffect, useState } from 'react';

export default function Mount_Unmount() {
	const [count, setCount] = useState(0);
	
	useEffect(() => {
		const runningTime = setInterval(() => {
			console.log('Đã gọi setInterval');
			setCount((precount) => precount + 1);
		}, 1000);
		return () => {
			console.log('Đã dọn setInterval');
			clearInterval(runningTime);
		};
	}, []);
	return (
		<div>
			<h2>Mount/Unmount component để thử</h2>
			<p>count: {count}</p>
		</div>
	);
}
