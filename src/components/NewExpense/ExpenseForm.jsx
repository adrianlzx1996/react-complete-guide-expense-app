import "./ExpenseForm.css"
import { useState } from "react";

const initialUserInput = {
	title: "",
	amount: 0,
	date: "",
}

const ExpenseForm = ({ onSaveExpenseData }) => {
	const [ userInput, setUserInput ] = useState(initialUserInput);

	const titleChangeHandler = (event) => {
		// noinspection JSCheckFunctionSignatures
		setUserInput(old => ({
			...old,
			title: event.target.value,
		}))
	};

	const amountChangeHandler = (event) => {
		// noinspection JSCheckFunctionSignatures
		setUserInput(old => ({
			...old,
			amount: event.target.value,
		}))
	}

	const dateChangeHandler = (event) => {
		// noinspection JSCheckFunctionSignatures
		setUserInput(old => ({
			...old,
			date: event.target.value,
		}))
	}

	const submitHandler = (event) => {
		event.preventDefault()

		const expenseData = {
			...userInput,
			date: new Date(userInput.date),
		};

		onSaveExpenseData(expenseData);
		setUserInput(initialUserInput)
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className={"new-expense__control"}>
					<label htmlFor="title">Title</label>
					<input type="text" id={"title"} onChange={titleChangeHandler} value={userInput.title} />
				</div>
				<div className={"new-expense__control"}>
					<label htmlFor="amount">Amount</label>
					<input type="number" id={"amount"} min={"0.01"} step={"0.01"} onChange={amountChangeHandler}
						   value={userInput.amount} />
				</div>
				<div className={"new-expense__control"}>
					<label htmlFor="date">Date</label>
					<input type="date" id={"date"} min={"2019-01-01"} max={"2022-12-31"}
						   onChange={dateChangeHandler} value={userInput.date} />
				</div>

			</div>
			<div className={"new-expense__actions"}>
				<button type={"submit"}>Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm