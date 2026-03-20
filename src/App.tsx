import { lazy, Suspense } from "react";
import "./App.css";

const DataTable = lazy(() => import('./components/DataTable'));

const App = () => {
	return (
		<div>
			<Suspense fallback={null}>
				<DataTable />
			</Suspense>
		</div>
	)
}

export default App
