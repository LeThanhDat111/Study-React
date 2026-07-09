import './App.css';

const title = ['Chào mừng bạn đến với trang web của tôi!', 'Xin chào bạn cần chúng tôi giúp đỡ gì nào?', 'Rất hân hạnh được chào đón bạn!'];
let id = Math.floor(Math.random() * title.length);
let date = new Date().toLocaleDateString();
let hour = new Date().toLocaleTimeString();
function Header() {
	return (
		<>
			<h1>{title[id]}</h1>
			<p>
				Hôm nay là: <strong>{date}</strong>. Hiện tại: <strong>{hour}</strong>
			</p>
		</>
	);
}

function App() {
	return (
		<>
			<Header />
		</>
	);
}
export default App;
