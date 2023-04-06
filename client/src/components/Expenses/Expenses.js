import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = ({onRerender}) => {

  const [isDeleted,setIsDeleted]=useState(false)

  const [filteredYear, setFilteredYear] = useState('2020');
  const[expenseData,setExpensedata]=useState([])

  const Id = localStorage.getItem("Id");
  const userId=JSON.parse(Id)
  // console.log(userId)

const deleteHandler = (boolean) => {
  setIsDeleted(boolean)
  // console.log(boolean,"EXP")
};

useEffect(()=>{ 
    const fetchExpenseData=async()=>{

      const res = await axios.get(`http://localhost:6060/getExpense/${userId}`)
      // console.log(res.data.exp)
      setExpensedata(res.data.exp)
    };
    
    fetchExpenseData()
    console.log(onRerender,'expenses')
  },[onRerender,isDeleted]);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenseData.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList isDelete={isDeleted} onDeleteExpense={deleteHandler} items={filteredExpenses}  />
      </Card>
    </div>
  );
};

export default Expenses;
