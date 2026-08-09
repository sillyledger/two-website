import type { Metadata } from "next";
import { DemoWidget } from "@/components/demo-widget";

export const metadata: Metadata = {
  title: "Try TWO — Live Demo, No Signup Required",
  description: "Play with real split-view, tabs, and linked docs right in your browser — no account needed. See how TWO feels before you sign up.",
};

export default function DemoPage() {
  return <DemoWidget />;
}
