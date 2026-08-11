import { useRef, useState } from 'react';
import Dialog from './Dialog';
export default function TabGameActivity({ title, targetTimer }) {
	const [submitBtn, setSubmitBtn] = useState(false);
	const timerRef = useRef(null);
	const dialogRef = useRef(null);

	function handleClick() {
		if (!submitBtn) {
			setSubmitBtn(true);
			timerRef.current = setTimeout(() => {
				setSubmitBtn(false);
				dialogRef.current.showModal();
			}, targetTimer * 1000);
		} else {
			setSubmitBtn(false);
			dialogRef.current.showModal();
			clearTimeout(timerRef.current);
		}
	}

	return (
		<>
			<div className="tabGame">
				<h2 className="title_tabGame">{title}</h2>
				<p
					style={{
						background: 'rgb(32, 5, 77)',
						border: '1px dashed rgb(25, 156, 232)',
						padding: '5px 10px',
						borderRadius: '5px',
						color: 'rgb(126, 11, 155)',
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
			<Dialog ref={dialogRef} targetTimer={targetTimer} />
		</>
	);
}
