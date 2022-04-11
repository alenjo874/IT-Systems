import React from "react";
import Chart from "chart.js/auto"; //keep
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

function DashboardPage({ completedTickets, ticketsArray, allTicketsArray }) {
  const complete = completedTickets.length;
  const incomplete = ticketsArray.length;

  const ratio = { Low: 0, Moderate: 0, Critical: 0 };

  for (let i = 0; i < allTicketsArray.length; i++) {
    if (allTicketsArray[i].level === "Low") {
      ratio["Low"] += 1;
    } else if (allTicketsArray[i].level === "Moderate") {
      ratio["Moderate"] += 1;
    } else {
      ratio["Critical"] += 1;
    }
  }


  return (
    <div className="dashboard-container">
      <div className="top-data">
        <div className="user-data">
          <p className="p-num">5</p>
          <p>Total Tickets</p>
        </div>
        <div className="user-data">
          <p className="p-num">5</p>
          <p>Open Tickets</p>
        </div>
        <div className="user-data">
          <p className="p-num">5</p>
          <p>Completed Tickets</p>
        </div>
      </div>

      <div className="top-graph">
        <div className="pie-chart">
          <Pie
            data={{
              labels: ["Incomplete", "Complete"],
              datasets: [
                {
                  label: "My First Dataset",
                  data: [complete, incomplete],
                  backgroundColor: ["rgb(119, 221, 119)", "rgb(251, 105, 98)"],
                  hoverOffset: 4,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Complete vs Incomplete Tickets",
                  padding: {
                    top: 10,
                    bottom: 30,
                  },
                },
                legend: {
                  position: "bottom",
                },
              },
            }}
          />
        </div>

        <div className="donut-circle">
          <Doughnut
            data={{
              labels: ["Low", "Moderate", "Critical"],
              datasets: [
                {
                  label: "Ticket Severity Ratio",
                  data: [ratio["Low"], ratio["Moderate"], ratio["Critical"]],
                  backgroundColor: [
                    "rgb(119, 221, 119)",
                    "rgb(255, 205, 86)",
                    "rgb(255, 99, 132)",
                  ],
                  hoverOffset: 4,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Ticket Level Ratio",
                  padding: {
                    top: 10,
                    bottom: 30,
                  },
                },
                legend: {
                  position: "bottom",
                },
              },
            }}
          />
        </div>
      </div>
      <div className="line-chart">
        <Line
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
              {
                label: "My First Dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          }}
        />
      </div>
      <div className="bar-graph">
        <Bar
          data={{
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
}

export default DashboardPage;
