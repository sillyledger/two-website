import type { Metadata } from "next";
import { ReportBugClient } from "./report-bug-client";

export const metadata: Metadata = {
  title: "Report a Bug | TWO",
  description: "Report a bug, request a feature, or get in touch with the TWO team.",
};

export default function ReportBugPage() {
  return <ReportBugClient />;
}
