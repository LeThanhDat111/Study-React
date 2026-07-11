import './App.css';
import logo from './assets/img/my_logo.png';
import pic1 from './assets/img/images.jpg';
import pic2 from './assets/img/React-la-gi-1.jpg';
import pic3 from './assets/img/React-la-gi-6518027.jpg';
import pic4 from './assets/img/Reactjs.webp';

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
						<Main_Information img={pic1} title="Components" desc="Khối xây dựng giao diện cơ bản - Kết hợp nhiều thành phần để tạo nên ứng dụng" />
						<Main_Information img={pic2} title="Components" desc="Khối xây dựng giao diện cơ bản - Kết hợp nhiều thành phần để tạo nên ứng dụng" />
						<Main_Information img={pic3} title="Components" desc="Khối xây dựng giao diện cơ bản - Kết hợp nhiều thành phần để tạo nên ứng dụng" />
						<Main_Information img={pic4} title="Components" desc="Khối xây dựng giao diện cơ bản - Kết hợp nhiều thành phần để tạo nên ứng dụng" />
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
				<h3>{props.title}</h3>
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
