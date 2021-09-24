import './ExpenseItem.css';
import './ExpenseDate.css';
import ExpenseItem from './ExpenseItem';
import React,{useState} from 'react'
import ExpensesFilter from './ExpenseFilter';

function Expenses(props) {
  const[filteredYear,setFilteredYear]=useState(2019)
 
  const filterChangeHandler =(selectedYear)=>{
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {props.items.filter((expense.date ===filteredYear)=>(
          <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}

    </div>
  )
}

export default Expenses;
