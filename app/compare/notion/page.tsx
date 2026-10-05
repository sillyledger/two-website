import type { Metadata } from "next";
import { ComparePage } from "@/components/compare-page";
import { getCompetitor } from "@/components/compare-data";

export const metadata: Metadata = {
  title: "TWO vs Notion: An Honest Comparison | TWO",
};

export default function CompareNotionPage() {
  return <ComparePage c={getCompetitor("notion")} />;
}
