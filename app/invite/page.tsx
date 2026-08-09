import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beta Access | TWO",
  description: "Join the TWO beta. Give real feedback, get lifetime access to every feature.",
};

const MAILTO =
  "mailto:beta@two.so?subject=Beta%20access%20request&body=Hi%2C%0A%0AI%27d%20love%20to%20join%20the%20beta%20and%20help%20with%20feedback.%0A%0AHere%27s%20a%20bit%20about%20how%20I%27d%20use%20TWO%3A%0A%0A%0AThanks!";

export default function Invite() {
  return (
    <div className="inv-frame">
      <div className="inv-head">
        <p className="micro">Feedback beta</p>
        <h1 className="display">
          One screen. Two panes.
          <br />
          One request.
        </h1>
      </div>

      <div className="inv-stage">
        <div className="inv-pane">
          <div className="inv-doc-bar">
            <i></i>
            <i></i>
            <i></i>
            <span className="inv-pill indigo">Why</span>
          </div>
          <div className="inv-pitch">
            <h2 className="inv-pitch-title display">Give feedback, keep everything.</h2>
            <p>
              I&apos;m building TWO alone, and beta spots go to people willing to actually use it
              and tell me what&apos;s broken, missing, or confusing.
            </p>
            <p>In return, you get lifetime access to every feature — free, for as long as TWO exists.</p>
            <p>If that sounds like a fair trade, send a note. I read every request myself.</p>
            <p className="inv-sign">— Pieter, building TWO</p>
          </div>
        </div>

        <div className="inv-seam-dot"></div>

        <div className="inv-pane">
          <div className="inv-doc-bar">
            <i></i>
            <i></i>
            <i></i>
            <span className="inv-pill clay">Compose</span>
          </div>
          <div className="inv-mail-chrome">
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div className="inv-field">
            <span className="k">To</span>
            <span className="v">beta@two.so</span>
          </div>
          <div className="inv-field">
            <span className="k">Subject</span>
            <span className="v">Beta access request</span>
          </div>
          <div className="inv-body-preview">
            Hi — I&apos;d love to join the beta and help with feedback.
            <br />
            Here&apos;s a bit about how I&apos;d use TWO:<span className="inv-cursor"></span>
          </div>
          <a className="inv-send" href={MAILTO}>
            Send request
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1e1b3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </a>
          <p className="inv-caption">Opens in your email app, ready to send.</p>
        </div>
      </div>

      <div className="inv-facts">
        <div>
          <span className="k">Response time</span>
          <span className="v">Usually within a day</span>
        </div>
        <div>
          <span className="k">What we ask</span>
          <span className="v">Real feedback as you use it</span>
        </div>
        <div>
          <span className="k">What you get</span>
          <span className="v">Lifetime access, every feature</span>
        </div>
      </div>
    </div>
  );
}
