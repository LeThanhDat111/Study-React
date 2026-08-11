import HeaderGame from './Game_Header.jsx';
import { useState, useRef } from 'react';
import TabGameActivity from './TabGameAcitvity.jsx';
import styled from 'styled-components';
const ContainerTabGame = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 25rem;
	gap: 50px;
	justify-content: center;
`;

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
				<h2 className="txt_printName">Welcome to {namePlayer.trim() || 'No Name'}</h2>
				<div>
					<input className="inp_nameplayer" type="text" ref={prefer} />
					<button className="btn_nameplayer" onClick={handleNamePlayer}>
						Set Name
					</button>
				</div>
			</div>
			<ContainerTabGame>
				<TabGameActivity title="Lever 1" targetTimer="1" />
				<TabGameActivity title="Lever 2" targetTimer="5" />
				<TabGameActivity title="Lever 3" targetTimer="10" />
				<TabGameActivity title="Lever 4" targetTimer="15" />
			</ContainerTabGame>
		</div>
	);
}
