import './ExpenseItem.css';
import './ExpenseDate.css';
import ExpenseItem from './ExpenseItem';
import React,{useState} from 'react'
import ExpensesFilter from './ExpenseFilter';

function Expenses(props) {
  const[filteredYear,setFilteredYear]=useState(2022)
 
  const filterChangeHandler =(selectedYear)=>{
    setFilteredYear(selectedYear);
  }

  const filteredExpense = props.items.filter(expense =>{
    return expense.date.getFullYear().toString()=== filteredYear
  })

  return (
    <div>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {filteredExpense.length === 0 ? (<p>No Expense Found</p>) :(filteredExpense.map((expense, index)=>(
          <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )))}
    </div>
  )
}

export default Expenses;
