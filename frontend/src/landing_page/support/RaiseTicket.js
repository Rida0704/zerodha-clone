import React from 'react';

function RaiseTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">
          To create a ticket select a relevant topic.
        </h1>
      </div>

      {/* Row 1 */}
      <div className="row text-start">
        {[...Array(3)].map((_, index) => (
          <div className="col-4 mt-3 mb-3" key={index}>
            <h4><i className="fa-solid fa-circle-plus"></i> Account Opening</h4>
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Resident individual</a><br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Minor</a><br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Non Resident Indian (NRI)</a><br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Company, Partnership, HUF and LLP</a><br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Glossary</a><br />
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="row text-start">
        {[...Array(3)].map((_, index) => (
          <div className="col-4 mt-3 mb-3" key={index + 3}>
            <h4><i className="fa-solid fa-circle-plus"></i> Account Opening</h4>
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Resident individual</a><br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Minor</a><br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Non Resident Indian (NRI)</a><br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Company, Partnership, HUF and LLP</a><br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Glossary</a><br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RaiseTicket;
