import React from "react";

function Dashboard() {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      <div className="p-4">
        <h1 className="text-black text-xl uppercase mt-16 mx-16 text-center mb-4">
          Welcome to Tendo Docs!
        </h1>
        <div>
          <img src={
            "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          />
        </div>
        <p className="mt-2 text-gray-600"></p>
      </div>
    </div>
  );
}

export default Dashboard;
