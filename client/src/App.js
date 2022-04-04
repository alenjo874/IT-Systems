import React, { useEffect, useState } from "react";
import MainPage from "./components/Main/MainPage";
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
      <MainPage />
      {displayTickets}
    </div>
  );
}

export default App;
