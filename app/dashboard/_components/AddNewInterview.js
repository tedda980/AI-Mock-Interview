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
import { LoaderCircle } from "lucide-react";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { db } from "@/utils/db";
import { useRouter } from "next/navigation";

function AddNewInterview() {
  const [openDailog, setOpenDailog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();
  const { user } = useUser();

  const onSubmit = async (e) => {
    setLoading(true);
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
    const MockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");

    console.log(JSON.parse(MockJsonResp));
    setJsonResponse(MockJsonResp);

    if (MockJsonResp) {
      const resp = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResp,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD-MM-yyyy"),
        })
        .returning({ mockId: MockInterview.mockId });

      console.log("Inserted ID:", resp);
      if (resp) {
        setOpenDailog(false);
        router.push("/dashboard/interview/" + resp[0]?.mockId);
      }
    } else {
      console.log("ERROR");
    }

    setLoading(false);
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
                    Add Details about your job position/role, Job description
                    &amp; years of experience 
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
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-orange-300 text-white"
                  >
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin" /> Generating
                        from AI
                      </>
                    ) : (
                      "Start Interview"
                    )}
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
