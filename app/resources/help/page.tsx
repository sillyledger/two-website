import type { Metadata } from "next";
import { HelpCenterClient } from "./help-client";

export const metadata: Metadata = {
  title: "Help Center & User Guides | TWO Docs",
};

export default function HelpPage() {
  return <HelpCenterClient />;
}
