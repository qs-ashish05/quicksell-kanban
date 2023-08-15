import React,  { useState, useEffect } from 'react';
import './App.css';
import Header from "./Header";
import DropDown from './Dropdown';
import CardComponentCall from './CardComponentCall';
import CardComponentCallMain from './CardComponentCallMain';

function App() {

  const res = {
    "tickets":[
      {
        "id":"CAM-1",
        "title":"Update User Profile Page UI",
        "tag":["Feature request"],
        "userId":"usr-1",
        "status":"Todo",
        "priority":4
      },
      {
        "id":"CAM-2",
        "title":"Add Multi-Language Support - Enable multi-language support within the application.",
        "tag":["Feature Request"],
        "userId":"usr-2",
        "status":"In progress",
        "priority":3
      },
      {
        "id":"CAM-3",
        "title":"Optimize Database Queries for Performance",
        "tag":["Feature Request"],
        "userId":"usr-2",
        "status":"In progress",
        "priority":1
      },
      {
        "id":"CAM-4",
        "title":"Implement Email Notification System",
        "tag":["Feature Request"],
        "userId":"usr-1",
        "status":"In progress",
        "priority":3
      },
      {
        "id":"CAM-5",
        "title":"Enhance Search Functionality",
        "tag":["Feature Request"],
        "userId":"usr-5",
        "status":"In progress",
        "priority":0
      },
      {
        "id":"CAM-6",
        "title":"Third-Party Payment Gateway",
        "tag":["Feature Request"],
        "userId":"usr-2",
        "status":"Todo",
        "priority":1
      },
      {
        "id":"CAM-7",
        "title":"Create Onboarding Tutorial for New Users",
        "tag":["Feature Request"],
        "userId":"usr-1",
        "status":"Backlog",
        "priority":2
      },
      {
        "id":"CAM-8",
        "title":"Implement Role-Based Access Control (RBAC)",
        "tag":["Feature Request"],
        "userId":"usr-3",
        "status":"In progress",
        "priority":3
      },
      {
        "id":"CAM-9",
        "title":"Upgrade Server Infrastructure",
        "tag":["Feature Request"],
        "userId":"usr-5",
        "status":"Todo",
        "priority":2
      },
      {
        "id":"CAM-10",
        "title":"Conduct Security Vulnerability Assessment",
        "tag":["Feature Request"],
        "userId":"usr-4",
        "status":"Backlog",
        "priority":1
      }
    ],
    "users": [
      {
        "id":"usr-1",
        "name":"Anoop sharma",
        "available":false
      },
      {
        "id":"usr-2",
        "name":"Yogesh",
        "available":true
      },
      {
        "id":"usr-3",
        "name":"Shankar Kumar",
        "available":true
      },
      {
        "id":"usr-4",
        "name":"Ramesh",
        "available":true
      },
      {
        "id":"usr-5",
        "name":"Suresh",
        "available":true
      }
    ]
  }

  // drop down variables
  const [select1 , setSelect1] = useState('');
  const [select2 , setSelect2] = useState('');
  const [select3 , setSelect3] = useState('');

  // console.log(res["tickets"]);
  // console.log(res["users"]);
  // console.log(select1);
  // console.log(select2);
  // console.log(select3);



  return (
   <div className='ui container'>
    <Header/>
    <DropDown select1 = {select1} select2 = {select2} select3 = {select3} setSelect1 = {setSelect1} setSelect2 = {setSelect2} setSelect3 = {setSelect3} />
    {/* <AddContact/>
    <ContactList contacts = {contacts}/> */}

    {(select1 == "Display all" && select2 == "" && select3 == "") && <CardComponentCallMain tickets = {res["tickets"]}/>}

    {(select1 == "Display by filter" && select2 != "" && select3 != "") && <CardComponentCall tickets = {res["tickets"]} group_by = {select2} sort_by ={select3}/>}

   </div>
  );
}

export default App;
