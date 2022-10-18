import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
	const expenses = [
		{ id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2021, 1, 2) },
		{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 3) },
		{ id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 3, 4) },
		{ id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 6) },
	]

	const addExpenseHandler = expense => {}

	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;