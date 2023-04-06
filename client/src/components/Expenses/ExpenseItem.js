import React, { useState } from 'react';
import axios from 'axios'

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  

  const deleteHandler = async()=>{
    await axios.put(`http://localhost:6060/deleteExpense/${props.id}`)

    
    props.onDeleteExpense(!props.isDelete)
  
  }
  
  return (
    <li>
      <Card className='expense-item'> 
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <button className='dlt-btn' onClick={deleteHandler}>X</button>
          <div className='expense-item__price'>Rs.{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
