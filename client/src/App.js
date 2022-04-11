import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./components/Dashboard/DashboardPage";
import EmployeeEmail from "./components/Employee/EmployeeEmail";
import EmployeeNavBar from "./components/Employee/EmployeeNavBar";
import EmployeePage from "./components/Employee/EmployeePage";
import InventoryPage from "./components/Inventory/InventoryPage";
import LoginPage from "./components/Login/LoginPage";
import MainPage from "./components/Main/MainPage";
import NavBar from "./components/NavBar/NavBar";
import TicketPage from "./components/Ticket/TicketPage";
import "./style/style.css";

function App() {
  const [inventoryArray, setInventoryArray] = useState([]);
  const [ticketsArray, setTicketsArray] = useState([]);
  const [completedTickets, setCompletedTickets] = useState([]);
  const [allTicketsArray, setAllTicketsArray] = useState([]);

  useEffect(() => {
    fetch("/incomplete_tickets")
      .then((res) => res.json())
      .then((data) => {
        setTicketsArray(data);
      });
  }, []);

  useEffect(() => {
    fetch("/tickets")
      .then((res) => res.json())
      .then((data) => {
        setAllTicketsArray(data);
      });
  }, []);

  useEffect(() => {
    fetch("/complete_tickets")
      .then((res) => res.json())
      .then(setCompletedTickets);
  }, []);

  useEffect(() => {
    fetch("/inventories")
      .then((res) => res.json())
      .then(setInventoryArray);
  }, []);

  return (
    <div className="App">
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/">
          <div className="sidebar-container">
            <NavBar />
            <MainPage />
          </div>
        </Route>
        <Route exact path="/ticket">
          <div className="sidebar-container">
            <NavBar />
            <TicketPage
              ticketsArray={ticketsArray}
              setTicketsArray={setTicketsArray}
              completedTickets={completedTickets}
              setCompletedTickets={setCompletedTickets}
            />
          </div>
        </Route>
        <Route exact path="/inventory">
          <div className="sidebar-container">
            <NavBar />
            <InventoryPage
              inventoryArray={inventoryArray}
              setInventoryArray={setInventoryArray}
            />
          </div>
        </Route>
        <Route exact path="/dashboard">
          <div className="sidebar-container">
            <NavBar />
            <DashboardPage
              allTicketsArray={allTicketsArray}
              ticketsArray={ticketsArray}
              completedTickets={completedTickets}
            />
          </div>
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/employee">
          <div className="sidebar-container">
            <EmployeeNavBar />
            <EmployeePage inventoryArray={inventoryArray} />
          </div>
        </Route>
        <Route exact path="/employee_email">
          <div className="sidebar-container">
            <EmployeeNavBar />
            <EmployeeEmail />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
