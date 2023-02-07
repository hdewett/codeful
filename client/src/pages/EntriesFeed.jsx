import React from "react";
import { Outlet } from "react-router";
import EntriesTable from "../components/EntriesTable";

function EntriesFeed() {
  return (
    
    <div className="EntriesFeed px-14">
      <h1>NEW entry</h1>
      <EntriesTable />
      <Outlet />
    </div>
  )
}

export default EntriesFeed;