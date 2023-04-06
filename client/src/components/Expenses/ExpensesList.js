

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {


  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
        isDelete={props.isDelete}
        onDeleteExpense={props.onDeleteExpense}
          id={expense._id}
          key={expense._id}
          title={expense.title}
          amount={expense.amount}
          date={new Date(expense.date)}
        />
      ))} 
    </ul>
  );
};

export default ExpensesList;
