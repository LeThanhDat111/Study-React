import logo from '../../assets/img/my_logo.png';
import './Header.css';

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

export default Header;
