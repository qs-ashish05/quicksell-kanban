import "./App.css";
import React, { useState } from "react";

function FilterDropDown(){
    const [select1, setSelect1] = useState('');
    const [select2, setSelect2] = useState('');
    const [select3, setSelect3] = useState('');

    return (
        <div className="app">
        <div className="card">
          <h2>Card 1</h2>
          <select value={select1} onChange={e => setSelect1(e.target.value)}>
            <option></option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div className="card">
          <h2>Card 2</h2>
          <select value={select2} onChange={e => setSelect2(e.target.value)}>
            <option></option>
            <option>Option A</option>
            <option>Option B</option>
            <option>Option C</option>
          </select>
        </div>
        <div className="card">
          <h2>Card 3</h2>
          <select value={select3} onChange={e => setSelect3(e.target.value)}>
            <option></option>
            <option>Choice X</option>
            <option>Choice Y</option>
            <option>Choice Z</option>
          </select>
        </div>
      </div>
    )
}

export default FilterDropDown;