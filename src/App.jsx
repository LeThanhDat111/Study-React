import './App.css';
import logo from './assets/img/my_logo.png';
import { myData } from './data.js';

function Header() {
	return (
		<>
			<header>
				<img src={logo} alt="" className="logo" />
				<h1 className="title_header">React Cùng Tôi!!!</h1>
				<p className="txt_header">Học React - Khám phá cách xây dựng các ứng dụng linh hoạt, hiện đại và đầy sáng tạo!</p>
			</header>
		</>
	);
}

function Main() {
	return (
		<>
			<main>
				<section>
					<h2>Khái niệm chính trong React</h2>
					<ul>
						<Main_Information img={myData[0].img} title={myData[0].title} desc={myData[0].desc} />
						<Main_Information {...myData[1]} />
						<Main_Information {...myData[2]} />
						<Main_Information {...myData[3]} />
					</ul>
				</section>
			</main>
		</>
	);
}

function Main_Information(props) {
	return (
		<>
			<li>
				<figure>
					<img src={props.img} alt={props.title} className="img_main img_hover" />
				</figure>
				<p>{props.desc}</p>
			</li>
		</>
	);
}

function App() {
	return (
		<>
			<Header />
			<Main />
		</>
	);
}
export default App;
