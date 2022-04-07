import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./components/Dashboard/DashboardPage";
import EmployeeNavBar from "./components/Employee/EmployeeNavBar";
import EmployeePage from "./components/Employee/EmployeePage";
import InventoryPage from "./components/Inventory/InventoryPage";
import ItemDetail from "./components/Inventory/ItemDetail";
import LoginPage from "./components/Login/LoginPage";
import MainPage from "./components/Main/MainPage";
import NavBar from "./components/NavBar/NavBar";
import TicketPage from "./components/Ticket/TicketPage";
import "./style/style.css";

function App() {
  const [inventoryArray, setInventoryArray] = useState([]);
  const [moreDetailItem, setMoreDetailItem] = useState({});
  const [ticketsArray, setTicketsArray] = useState([]);
  const [completedTickets, setCompletedTickets] = useState([]);

  useEffect(() => {
    fetch("/incomplete_tickets")
      .then((res) => res.json())
      .then((data) => {
        setTicketsArray(data);
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

  function handleMoreDetails(id) {
    const selectedInventoryItem = inventoryArray.find((item) => item.id === id);
    setMoreDetailItem(selectedInventoryItem);
  }

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
              handleMoreDetails={handleMoreDetails}
            />
          </div>
        </Route>
        <Route exact path="/inventory_item">
          <div className="sidebar-container">
            <NavBar />
            <ItemDetail {...moreDetailItem} />
          </div>
        </Route>
        <Route exact path="/dashboard">
          <div className="sidebar-container">
            <NavBar />
            <DashboardPage
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
      </Switch>
    </div>
  );
}

export default App;
