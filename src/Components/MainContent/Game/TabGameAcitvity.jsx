import { useRef, useState } from 'react';
import Dialog from './Dialog';
export default function TabGameActivity({ title, targetTimer }) {
	const [submitBtn, setSubmitBtn] = useState(false);
	const timerRef = useRef(null);
	const dialogRef = useRef(null);
	const starTime = useRef(0);
	const endTime = useRef(0);
	const restTime = useRef(0);
	function handleClick() {
		if (!submitBtn) {
			setSubmitBtn(true);
			starTime.current = performance.now();
			console.log(starTime.current);
			timerRef.current = setTimeout(
				() => {
					setSubmitBtn(false);
					restTime.current = targetTimer + 1;
					console.log(performance.now());
					dialogRef.current.open();
				},
				(targetTimer + 1) * 1000,
			);
		} else {
			endTime.current = performance.now();
			setSubmitBtn(false);
			clearTimeout(timerRef.current);
			console.log(endTime.current);
			restTime.current = (endTime.current - starTime.current) / 1000;
			console.log(restTime.current);
			dialogRef.current.open();
		}
	}
	return (
		<>
			<div className="tabGame">
				<h2 className="title_tabGame">{title}</h2>
				<p
					className={submitBtn ? 'animation' : ''}
					style={{
						background: 'rgb(32, 5, 77)',
						border: '1px dashed rgb(25, 156, 232)',
						padding: '5px 10px',
						borderRadius: '5px',
						color: 'rgb(244, 236, 246)',
						fontWeight: 'bold',
					}}>
					{targetTimer} second
				</p>
				<button className="btn_game" onClick={handleClick}>
					{submitBtn ? 'Stop' : 'Start'}
				</button>
				<p
					style={{
						color: 'aqua',
					}}>
					{submitBtn ? 'Time is running' : 'Timer is inactive'}
				</p>
			</div>
			<Dialog ref={dialogRef} targetTimer={targetTimer} restTime={restTime} />
		</>
	);
}
