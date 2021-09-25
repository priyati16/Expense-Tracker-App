import React from 'react';
import './ExpenseItem.css';
import './ExpenseDate.css';

function ExpenseItem(props) {
//   const [title,setTitle] = useState(props.title);
//   console.log('Expense item is evaluated');

//     const changeTitle=()=>{
//         setTitle('updated');
//     }
    return (
            <div className="new-expenses">
                <div className="expense-item">
                    <div className="expense-date" >
                        <div className="expense-date__month">{props.date.toLocaleString('en-US',{month:'long'})}</div>
                        <div className="expense-date__year">{props.date.getFullYear()}</div>
                        <div className="expense-date__day">{props.date.toLocaleString('en-US',{day:'2-digit'})}</div>
                        
                    </div>
                    <div className="expense-item__description">
                        <h2>{props.title}</h2>
                        <div className="expense-item__price">Rs.{props.amount}</div>
                        {/* <button onClick={changeTitle}>Change title</button> */}
                    </div>
                </div>
            </div>
            
    );
}

export default ExpenseItem

