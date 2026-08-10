import { myData, EXAMPLE } from '../../data.js';
import './Main.css';
import TabButton from './Tab_Button.jsx';
import Tabs from './Tabs.jsx';
import DefinitionOfReact from './DefinitionOfReact_Main.jsx';
import Greeting from './Greeting.jsx';
import Dialog from './Dialog.jsx';
import { useState } from 'react';
import Tab_input from './Tab_input.jsx';
import Login from './Login.jsx';
import Game from './Game/Game.jsx';
function Main() {
	console.log('Áp được gọi!');
	const [selectedTopic, setSelectedTopic] = useState();
	function handleClick(selectHandle) {
		setSelectedTopic(selectHandle);
	}
	return (
		<main>
			{/* Khái niệm về React */}
			{/*prettier-ignore*/}
			<Tabs
					title="Khái niệm chính trong React"
					ul={
						<ul className="list_Concept">
							{myData.map((item) => <DefinitionOfReact {...item} key={item.title} />)}
						</ul>
					}
					className="sec_custome"
					Container="h2"
			></Tabs>
			{/* Ví dụ về các nội dung trong React */}
			<Tabs title="Examples" className="sec_tabs" Container="h2">
				<ul className="list_Dynamic">
					{Object.entries(EXAMPLE).map(([key]) => (
						<TabButton onClick={() => handleClick(key)} isSelected={selectedTopic === key} key={key}>
							{key}
						</TabButton>
					))}
				</ul>
				{!selectedTopic ? (
					<p className="txt_info-btn">Vui lòng chọn tab cần tìm hiểu về React!</p>
				) : (
					<div className="bx_info-btn">
						<h3>{EXAMPLE[selectedTopic].title}</h3>
						<p>{EXAMPLE[selectedTopic].desc}</p>
						<pre>
							<code>{EXAMPLE[selectedTopic].code}</code>
						</pre>
					</div>
				)}
			</Tabs>
			<Greeting />
			<Dialog />
			<Tab_input />
			<Login />
			<Game />
		</main>
	);
}

export default Main;
