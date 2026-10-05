import type { Metadata } from "next";
import { ComparePage } from "@/components/compare-page";
import { getCompetitor } from "@/components/compare-data";

export const metadata: Metadata = {
  title: "TWO vs Apple Notes: An Honest Comparison | TWO",
};

export default function CompareAppleNotesPage() {
  return <ComparePage c={getCompetitor("apple-notes")} />;
}
