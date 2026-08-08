import logo from '../../assets/img/my_logo.png';
import classes from './Header.module.css';

function Header() {
	return (
		<header>
			<img src={logo} alt="" className={classes.logo} />
			<h1 className={classes['title_header']}>React Cùng Tôi!!!</h1>
			<p className={classes['txt_header']}>Học React - Khám phá cách xây dựng các ứng dụng linh hoạt, hiện đại và đầy sáng tạo!</p>
		</header>
	);
}

export default Header;
