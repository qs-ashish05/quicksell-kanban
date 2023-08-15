import React ,{ useEffect, useState }from 'react';
import './App.css';
import CardComponent from './CardComponent';


// Function to group data based on the specified key
function groupDataByCategory(data,category) {
  const groupedData = [];

  data.forEach(item => {
    if (!groupedData[category]) {
      groupedData[category] = [];
    }
    groupedData[category].push(item);
  });

  return groupedData;
}



function CardComponentCall({tickets,group_by,sort_by}) {
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
          {tickets.map((gd, index) => (  
              <tbody>
                <tr key={index} data-index={index}>  </tr> 
                <td>{gd["id"]}</td>    
                <td>{gd["title"]}</td>    
                <td>{gd["userId"]}</td>    
                <td>{gd["status"]}</td>    
                <td>{gd["priority"]}</td>    
               
              </tbody>
            ))} 
          
        </table>
       
      </div>
    </div>
  );
}

export default CardComponentCall;
