import type { Metadata } from "next";
import { ComparePage } from "@/components/compare-page";
import { getCompetitor } from "@/components/compare-data";

export const metadata: Metadata = {
  title: "TWO vs Obsidian: An Honest Comparison | TWO",
};

export default function CompareObsidianPage() {
  return <ComparePage c={getCompetitor("obsidian")} />;
}
