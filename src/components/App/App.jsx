import { useState, useEffect } from "react";

import { Description } from "../Description/Description";
import { Options } from "../Options/Options";
import { Feedback } from "../Feedback/Feedback";
import { Notification } from "../Notification/Notification";

export function App() {
  //*==================================================================================================================================
  const valueOption = {
    good: "Good",
    neutral: "Neutral",
    bad: "Bad",
    reset: "Reset",
  };
  //*==================================================================================================================================
  const [feedback, setFeedback] = useState(() => {
    const saveFeedback = localStorage.getItem("feedback");

    return saveFeedback
      ? JSON.parse(saveFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });
  //*==================================================================================================================================
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  //*==================================================================================================================================
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  //*================================================================================================================================
  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  }
  //*===============================================================================================================================
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);
  //*==================================================================================================================================
  return (
    <div>
      <Description
        name={"Sip Happens Café"}
        info={
          "Please leave your feedback about our service by selecting one of the options below."
        }
      />
      <Options
        totalFeedback={totalFeedback}
        handleReset={handleReset}
        updateFeedback={updateFeedback}
        valueOption={valueOption}
      />
      {totalFeedback > 0 ? (
        <Feedback
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
          feedback={feedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}
