import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./components/Dashboard/DashboardPage";
import EmployeePage from "./components/Employee/EmployeePage";
import InventoryPage from "./components/Inventory/InventoryPage";
import MainPage from "./components/Main/MainPage";
import NavBar from "./components/NavBar/NavBar";
import TicketPage from "./components/Ticket/TicketPage";
import "./style/style.css";

function App() {
  const [inventoryArray, setInventoryArray] = useState([]);
  useEffect(() => {
    fetch("/inventories")
      .then((res) => res.json())
      .then(setInventoryArray);
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/employee">
          <EmployeePage inventoryArray={inventoryArray} />
        </Route>
        <Route exact path="/ticket">
          <TicketPage />
        </Route>
        <Route exact path="/inventory">
          <InventoryPage inventoryArray={inventoryArray} />
        </Route>
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
