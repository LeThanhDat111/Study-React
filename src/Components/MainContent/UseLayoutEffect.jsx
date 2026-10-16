import { useLayoutEffect, useState } from 'react';
export default function UseLayoutEffec() {
	const [count, setCount] = useState(0);

	useLayoutEffect(() => {
		if (count > 2) {
			setCount(0);
		}
	}, [count]);

	const handleCount = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={handleCount}>Count</button>
		</div>
	);
}
