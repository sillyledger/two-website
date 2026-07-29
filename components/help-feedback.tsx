"use client";

import { useState } from "react";

export function HelpFeedback() {
  const [answered, setAnswered] = useState<"yes" | "no" | null>(null);

  return (
    <div className="harticle-footer">
      <p>{answered ? "Thanks for the feedback!" : "Was this article helpful?"}</p>
      {!answered && (
        <div className="harticle-fb">
          <button onClick={() => setAnswered("yes")}>Yes</button>
          <button onClick={() => setAnswered("no")}>No</button>
        </div>
      )}
    </div>
  );
}
