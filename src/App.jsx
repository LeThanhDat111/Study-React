import './App.css';
import Header from './Components/Header/Header.jsx';
import Main from './Components/MainContent/Main_Information.jsx';

function App() {
	function handleClick(selectHandle) {
		alert('Đã cick ' + selectHandle);
	}
	return (
		<>
			<Header />
			<Main onSelect={handleClick} />
		</>
	);
}
export default App;
