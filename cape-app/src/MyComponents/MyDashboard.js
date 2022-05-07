import React from 'react';
import { LoadDash } from './LoadDash';

export const MyDashboard = () => {

  const show = localStorage.getItem('show');
  console.log(show);
  
  return (
    <div className='m-3 p-3'>
      <h1 className='display-5 text-center'>Dashboard</h1>
     {show === 'false'?("Nothing to display! Please login to see your dashboard."): (<LoadDash />)}
    </div>
  )
}
