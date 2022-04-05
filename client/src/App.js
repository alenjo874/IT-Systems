import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./components/Dashboard/DashboardPage";
import InventoryPage from "./components/Inventory/InventoryPage";
import MainPage from "./components/Main/MainPage";
import NavBar from "./components/NavBar/NavBar";
import TicketPage from "./components/Ticket/TicketPage";
import "./style/style.css";

function App() {
  const [ticketsArray, setTicketsArray] = useState([]);

  useEffect(() => {
    fetch("/tickets")
      .then((res) => res.json())
      .then(setTicketsArray);
  }, []);

  const displayTickets = ticketsArray.map((ticket) => {
    return <p>{ticket.subject}</p>;
  });

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <MainPage />
          {displayTickets}
        </Route>
        <Route exact path="/ticket">
          <TicketPage />
        </Route>
        <Route exact path="/inventory">
          <InventoryPage />
        </Route>
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
