import type { Metadata } from "next";
import { TemplatesClient } from "./templates-client";

export const metadata: Metadata = {
  title: "Document Templates for Notes, Specs & Writing | TWO",
};

export default function TemplatesPageWrapper() {
  return <TemplatesClient />;
}
