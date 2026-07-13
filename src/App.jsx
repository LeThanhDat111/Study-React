import './App.css';
import Header from './Components/Header/Header.jsx';
import Main from './Components/MainContent/Main_Information.jsx';


function App() {

	function handleClick(){
		alert("Đã lick");
	}
	return (
		<>
			<Header />
			<Main onSelect={handleClick} />
		</>
	);
}
export default App;
