import React from "react";

function CaseDetails({ employee }) {
  return (
    <div className="case-details card">
      <div className="shared-subsection">
        <div className="ticket-subsections two-col">
          <div>
            <p className="detail-label">Contact Name</p>
            <p> {employee ? employee.name : null} </p>
          </div>
        </div>
        <div className="ticket-subsections two-col">
          <div>
            <p className="detail-label">Escalate</p>
            <p> {employee ? employee.name : null} </p>
          </div>
        </div>
      </div>

      <div className="shared-subsection">
        <div className="ticket-subsections two-col">
          <div>
            <p className="detail-label">Department</p>
            <p> {employee ? employee.name : null} </p>
          </div>
        </div>
        <div className="ticket-subsections two-col">
          <div>
            <p className="detail-label">Position</p>
            <p> {employee ? employee.name : null} </p>
          </div>
        </div>
      </div>

      <div className="ticket-subsections">
        <div>
          <p className="detail-label">Email</p>
          <p> {employee ? employee.name : null} </p>
        </div>
      </div>
      <div className="ticket-subsections">
        <div>
          <p className="detail-label">Mobile</p>
          <p> {employee ? employee.name : null} </p>
        </div>
      </div>
    </div>
  );
}

export default CaseDetails;
