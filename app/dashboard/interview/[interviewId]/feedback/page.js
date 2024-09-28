"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { index } from "drizzle-orm/mysql-core";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter()

  useEffect(() => {
    GetFeedback();
  }, []);
  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    console.log(result);
    setFeedbackList(result);
  };
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-green-500">Congratulation!</h2>
      <h2 className="font-bold text-2xl">Here is your interview feedback</h2>
      <h2 className="text-orange-300 text-lg my-3">
        Your overall interview rating: <strong>7/10</strong>
      </h2>
      <h2 className="text-sm text-gray-500">
        Find below interview question with correct answer,Your answer and
        feedack for improvement
      </h2>
      {feedbackList &&
        feedbackList.map((item, index) => (
          <Collapsible key={index}>
            <CollapsibleTrigger className="p-2 bg-secondary rounded-lg my-2 text-left flex w-full">
              {item.question}
              <ChevronsUpDown className="h-5 w-5" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="flex flex-col gap-2">
                <h2 className="text-orange-300 p-2 border rounded-lg">
                  <strong>Rating:</strong>
                  {item.rating}
                </h2>
                <h2 className="p-2 border rounded-lg bg-emerald-50 text-emerald-900">
                  <strong>Your Answer:</strong>
                  {item.userAns}
                </h2>
                <h2 className="p-2 border rounded-lg bg-orange-50 text-orange-900">
                  <strong>Correct Answer:</strong>
                  {item.correctAns}
                </h2>
                <h2 className="p-2 border rounded-lg bg-blue-50 text-blue-900">
                  <strong>Feedback:</strong>
                  {item.feedback}
                </h2>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
        <Button onClick={()=>router.replace('/dashboard')} className="my-10">
          Go Home
        </Button>
    </div>
  );
}

export default Feedback;
