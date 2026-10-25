import { useState, useMemo } from 'react';

export default function UseMeMo({ num }) {
	const [count, setCount] = useState(0);

	const Compute = (num) => {
		console.log('Bắt đầu tính');

		let result = 0;
		for (let i = 0; i <= 999; i++) {
			result += num;
		}
		return result;
	};

	const result = useMemo(() => Compute(num), [num]);

	return (
		<div>
			<h1>Value: {result}</h1>
			<button onClick={() => setCount(count + 1)}>Tăng đếm: {count}</button>
		</div>
	);
}
