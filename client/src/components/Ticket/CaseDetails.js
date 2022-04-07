import React from "react";

function CaseDetails({employee}) {
  return (
    <div className="case-details">
      <div className="ticket-subsections">
        <div>
          <p className="detail-label">Case Number</p>
          <p> {employee ? employee.name : null} </p>
        </div>
        <div>
          <p className="detail-label">Contact Name</p>
          <p> {employee ? employee.name : null} </p>
        </div>
        <div>
          <p className="detail-label">Escalate</p>
          <p> {employee ? employee.name : null} </p>
        </div>
        <div>
          <p className="detail-label">Status</p>
          <p> {employee ? employee.name : null} </p>
        </div>
      </div>
    </div>
  );
}

export default CaseDetails;
