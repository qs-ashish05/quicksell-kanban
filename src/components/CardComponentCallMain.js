import React from 'react';
import './App.css';
import CardComponent from './CardComponent';

const dictionaryData  = {
  // 
};

function CardComponentCallMain({tickets}) {
  //console.log(data);
  // const tickets = data;
  // const users = data["users"];
  //console.log("Hello world ");
  
  // console.log(tickets)  
  // console.log(group_by)
  // console.log(sort_by);
  
  return (
    <div className="app-CardComponentCall">
      <h1>Your Data Here</h1>
      <div className="card-container-CardComponentCall">
        {/* {Object.entries(tickets).map(([id, title, tag, userId, status, priority]) => (
          <CardComponent key={tickets["id"]} title={tickets["title"]} userId = {tickets["userID"]} status1 = {tickets["status"]} priority = {tickets["priority"]} />
        ))} */}
        <table>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>userID</th>
            <th>status</th>
            <th>priority</th>
          </tr>
          {tickets.map((tickets, index) => (  
              <tr key={index} data-index={index}>  
                <td>{tickets["id"]}</td>    
                <td>{tickets["title"]}</td>    
                <td>{tickets["userId"]}</td>    
                <td>{tickets["status"]}</td>    
                <td>{tickets["priority"]}</td>    
              </tr>  
            ))} 
        </table>
       
      </div>
    </div>
  );
}

export default CardComponentCallMain;
