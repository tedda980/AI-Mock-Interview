import React from "react";
import { UserButton } from "@clerk/nextjs";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";

function Dashboard() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl">Dashboard</h2>
      <h2 className="text-gray-500">Create and Start your AI Mockup Interview</h2>
    <div>
      <AddNewInterview/>
    </div>
    {/* Previous Interview List */}
    <InterviewList/>
    </div>
    
  );
}

export default Dashboard;
