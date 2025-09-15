import React from "react";
import counsellors from "../Data/counsellors";
import { Link } from "react-router-dom";

export default function CounsellorList() {
  const list = counsellors.map((counsellor) => (
    <li key={counsellor.id}>
      <Link to={`/counsellorDetail/${counsellor.id}`}>
        <h2>{counsellor.name}</h2>
        <p>{counsellor.specialization}</p>
        <p>{counsellor.position}</p>
        <p>{counsellor.email}</p>
        <p>{counsellor.timings}</p>
        <p>{counsellor.location}</p>
      </Link>
    </li>
  ));

  return (
    <div>
      <h1>List of counsellors</h1>
      <ul>{list}</ul>
    </div>
  );
}
