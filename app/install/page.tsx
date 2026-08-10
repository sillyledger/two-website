import type { Metadata } from "next";
import { InstallSteps } from "./install-steps";

export const metadata: Metadata = {
  title: "Install TWO as a Web App | iPhone, iPad & Mac",
};

export default function InstallPage() {
  return (
    <div className="features-frame">
      <section className="rs-hero">
        <p className="micro">Get the app</p>
        <h1 className="display">Install TWO on your device.</h1>
        <p>TWO works as a web app on iPhone, iPad, and Mac. No App Store needed, add it to your home screen or Dock in seconds.</p>
      </section>

      <InstallSteps />
    </div>
  );
}
