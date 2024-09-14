"use client";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModal";

function AddNewInterview() {
  const [openDailog, setOpenDailog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExperience);

    const InputPromt =
      "Job Position: " +
      jobPosition +
      ", Job Description:" +
      jobDesc +
      ", Years of Experience:" +
      jobExperience +
      ", Depends on this information please give me " +
      process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
      " interview question with Answered in Json Format,Give question and answered as field in JSON";
    const result = await chatSession.sendMessage(InputPromt);

    console.log(result.response.text());
  };

  return (
    <div>
      <div
        className="p-10 text-center  mt-6 border rounded-lg bg-gray-100 w-72 hover:shadow-md cursor-pointer
      "
        onClick={() => setOpenDailog(true)}
      >
        <h2 className="font-semibold text-md">+ Add New</h2>
      </div>
      <div className="mt-5 text-xl font-semibold mb-6">
        <h2>Previous Mock Interview</h2>
      </div>
      <div className="flex space-x-4 ">
        <div className="border rounded-lg w-80 h-24 bg-gray-100"></div>
        <div className="border rounded-lg w-80 h-24 bg-gray-100"></div>
        <div className="border rounded-lg w-80 h-24 bg-gray-100"></div>
        <div className="border rounded-lg w-80 h-24 bg-gray-100"></div>
      </div>

      <Dialog open={openDailog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Tell us more about your job interviewing
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>
                    Add Details about you job position/role,Job description &
                    years of experience
                  </h2>

                  <div className="mt-6 my-2">
                    <label>Job Position/Role</label>
                    <Input
                      placeholder="Eg.Full Stack Developer"
                      required
                      onChange={(event) => setJobPosition(event.target.value)}
                    />
                  </div>

                  <div className="mt-6 my-2">
                    <label>Job Description/ Tech Stack (In Short)</label>
                    <Textarea
                      placeholder="Eg.React,NodeJs,MySql ..."
                      required
                      onChange={(event) => setJobDesc(event.target.value)}
                    />
                  </div>
                  <div className="mt-6 my-2">
                    <label>Years of experience</label>
                    <Input
                      placeholder="Eg. 2"
                      type="number"
                      max="25"
                      required
                      onChange={(event) => setJobExperience(event.target.value)}
                    />
                  </div>
                </div>
                <div className="space-x-4 pt-2 text-end">
                  <Button
                    type="button"
                    className="bg-orange-300 text-white"
                    onClick={() => setOpenDailog(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-orange-300 text-white">
                    Start interview
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
