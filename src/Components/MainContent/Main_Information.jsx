import { myData } from '../../data.js';
import './Main_Information.css';
import TabButton from './Tab_Button.jsx';

function Main_Information(props) {
	return (
		<>
			<li className="item_Concept">
				<figure>
					<img src={props.img} alt={props.title} className="img_main img_hover" />
				</figure>
				<p className="txt_desc">{props.desc}</p>
			</li>
		</>
	);
}

function Main({ onSelect }) {
	return (
		<>
			<main>
				<section>
					<h2>Khái niệm chính trong React</h2>
					<ul className="list_Concept">
						<Main_Information img={myData[0].img} title={myData[0].title} desc={myData[0].desc} />
						<Main_Information {...myData[1]} />
						<Main_Information {...myData[2]} />
						<Main_Information {...myData[3]} />
					</ul>
				</section>
				<h2 className="txt_ex">Examples</h2>
				<ul className="list_Dynamic">
					<TabButton onSelect={() => onSelect('Components')}>Components</TabButton>
					<TabButton onSelect={() => onSelect('JSX')}>JSX</TabButton>
					<TabButton onSelect={() => onSelect('Props')}>Props</TabButton>
					<TabButton onSelect={() => onSelect('State')}>State</TabButton>
				</ul>
			</main>
		</>
	);
}

export default Main;
