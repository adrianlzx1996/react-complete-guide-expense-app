import "./ExpenseForm.css"
import { useState } from "react";

const ExpenseForm = () => {
	const [ title, setTitle ] = useState("")
	const [ amount, setAmount ] = useState(0)
	const [ date, setDate ] = useState("")

	const titleChangeHandler = (event) => {
		setTitle(event.target.value)
	};

	const amountChangeHandler = (event) => {
		setAmount(event.target.value)
	}

	const dateChangeHandler = (event) => {
		setDate(event.target.value)
	}

	return (
		<form action="">
			<div className="new-expense__controls">
				<div className={"new-expense__control"}>
					<label htmlFor="title">Title</label>
					<input type="text" id={"title"} onChange={titleChangeHandler} value={title} />
				</div>
				<div className={"new-expense__control"}>
					<label htmlFor="amount">Amount</label>
					<input type="number" id={"amount"} min={"0.01"} step={"0.01"} onChange={amountChangeHandler}
						   value={amount} />
				</div>
				<div className={"new-expense__control"}>
					<label htmlFor="date">Date</label>
					<input type="date" id={"date"} min={"2019-01-01"} max={"2022-12-31"}
						   onChange={dateChangeHandler} value={date} />
				</div>

				<div className={"new-expense__actions"}>
					<button type={"submit"}>Add Expense</button>
				</div>
			</div>
		</form>
	)
}

export default ExpenseForm