import "./App.css";
import React, { useState } from "react";

function DropDown({select1,select2,select3,setSelect1,setSelect2,setSelect3}){

 

//   console.log(select1);
//   console.log(select2);
//   console.log(select3);



  return (
    <div className="app">
      <div className="card">
        <h2>Display</h2>
        <select value={select1} onChange={e => setSelect1(e.target.value)}>
          <option></option>
          <option>Display all</option>
          <option>Display by filter</option>
        </select>
        <p>{select1}</p>
      </div>
      <div className="card">
        <h2>Group By</h2>
        <select value={select2} onChange={e => setSelect2(e.target.value)}>
          <option></option>
          <option>Status</option>
          <option>User</option>
          <option>Priority</option>
        </select>       
       <p>{select2}</p>
      </div>
      <div className="card">
        <h2>Sort By</h2>
        <select value={select3} onChange={e => setSelect3(e.target.value)}>
          <option></option>
          <option>Priority</option>
          <option>Title</option>
        </select>       
        <p>{select3}</p>
      </div>
    </div>

  );
}

export default DropDown;