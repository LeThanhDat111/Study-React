import HeaderGame from './Game_Header.jsx';
import { useState, useRef } from 'react';
export default function Game() {
	const [namePlayer, setNamePlayer] = useState('');
	const prefer = useRef();

	function handleNamePlayer() {
		setNamePlayer(prefer.current.value);
	}

	return (
		<div className="game">
			<HeaderGame />
			<p className="txt_challenge">Thử tài ước lượng thời gian</p>
			<div className="box_name">
				<h2>Welcome to {namePlayer.trim() || 'No Name'}</h2>
				<div>
					<input className="inp_nameplayer" type="text" ref={prefer} />
					<button className="btn_nameplayer" onClick={handleNamePlayer}>
						Set Name
					</button>
				</div>
			</div>
		</div>
	);
}
