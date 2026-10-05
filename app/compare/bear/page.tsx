import type { Metadata } from "next";
import { ComparePage } from "@/components/compare-page";
import { getCompetitor } from "@/components/compare-data";

export const metadata: Metadata = {
  title: "TWO vs Bear: An Honest Comparison | TWO",
};

export default function CompareBearPage() {
  return <ComparePage c={getCompetitor("bear")} />;
}
