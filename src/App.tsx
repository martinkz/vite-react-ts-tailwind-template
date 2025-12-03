import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<button className="p-4 bg-indigo-600 text-white rounded-lg" onClick={() => setCount((count) => count + 1)}>
				Count is {count}
			</button>
		</>
	);
}

export default App;
