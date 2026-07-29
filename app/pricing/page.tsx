import type { Metadata } from "next";
import { PricingClient } from "./pricing-client";

export const metadata: Metadata = {
  title: "Pricing Plans | TWO Docs",
};

export default function PricingPage() {
  return <PricingClient />;
}
