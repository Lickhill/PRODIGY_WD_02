import Todo from "./Todo";
import Clock from "./Clock";
import Stopwatch from "./Stopwatch";

function App() {
	return (
		<>
		<div className="app-wrapper">
			<Clock/>
			<Stopwatch/>
			<Todo />
		</div>
		</>
	);
}

export default App;
