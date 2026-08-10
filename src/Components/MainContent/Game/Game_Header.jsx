import styled from 'styled-components';
import timer from '../../../assets/img/timer.png';
import './Game.css';

const H1 = styled.h1`
	text-transform: uppercase;
	color: white;
	font-size: 30px;
	font-weight: bolder;
	text-shadow:
		0 0 5px rgb(246, 246, 246),
		0 0 10px rgb(255, 255, 255),
		0 0 15px rgb(255, 255, 255);

	& span {
		color: rgb(31, 179, 233);
		text-shadow:
			0 0 5px rgb(31, 179, 233),
			0 0 10px rgb(31, 179, 233),
			0 0 15px rgb(31, 179, 233);
	}
`;
export default function GameHeader() {
	return (
		<>
			<img src={timer} alt="" />
			<H1>
				Đếm ngược <span> căn thời gian</span>!
			</H1>
		</>
	);
}
