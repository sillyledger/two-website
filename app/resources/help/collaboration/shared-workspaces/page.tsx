import { HelpSidebar } from "@/components/help-sidebar";
import { HelpFeedback } from "@/components/help-feedback";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shared Workspaces | TWO Help",
};

export default function SharedWorkspacesArticle() {
  return (
    <div className="help-layout">
      <HelpSidebar activeHref="/resources/help/collaboration/shared-workspaces" />

      <article className="harticle">
        <p className="harticle-eyebrow">Collaboration</p>
        <h1 className="display">Shared workspaces</h1>
        <p className="harticle-meta">3 min read · Last updated Aug 2026</p>

        <p>
          A shared workspace is a separate space from your private docs where you and invited teammates can work
          in the same folders and docs together.
        </p>

        <div className="harticle-tip">
          <p><b>Note:</b>{" "}
          Shared workspaces are a Pro or Founding feature. On the Free plan you can view a workspace you&apos;ve
          been invited to, but you can&apos;t create one or invite others yourself.</p>
        </div>

        <h2 className="display">Creating a shared workspace</h2>
        <p>
          Click the <b>+</b> next to <b>Shared workspaces</b>{" "}
          in your sidebar and give it a name. It works just like your private workspace — folders, docs, and
          everything else — except anyone you invite can see and edit inside it too.
        </p>

        <h2 className="display">Inviting people</h2>
        <p>
          Open the <b>···</b> menu on a shared workspace and choose <b>Invite people</b>{". "}
          Add one or more emails, set a role for each, and send. Whoever you invite gets an email with a link to
          accept.
        </p>

        <div className="wsh-stage">
          <div className="wsh-invite">
            <div className="wsh-invite-row">
              <span className="wsh-input">alex@company.com</span>
              <span className="wsh-role">Editor</span>
            </div>
            <div className="wsh-invite-row">
              <span className="wsh-input">jordan@company.com</span>
              <span className="wsh-role">Viewer</span>
            </div>
          </div>
          <div className="wsh-send">Send invites</div>
        </div>

        <h2 className="display">Roles</h2>
        <p>Each person you invite gets one of four roles:</p>
        <ul>
          <li><b>Admin</b> — full edit access, plus can invite and manage other members.</li>
          <li><b>Editor</b> — can create and edit docs and folders in the workspace.</li>
          <li><b>Commenter</b> — can view and comment, without editing doc content.</li>
          <li><b>Viewer</b> — read-only access to everything in the workspace.</li>
        </ul>

        <h2 className="display">Member limit</h2>
        <p>
          Right now, every shared workspace supports up to <b>2 invited members</b>{", "}
          regardless of plan — this applies whether you&apos;re on Pro or Founding. If you need more seats than
          that today, reach out and let us know; team size limits are something we&apos;re actively reviewing.
        </p>

        <div className="harticle-pn">
          <a href="/resources/help/collaboration">← Collaboration</a>
          <a href="/resources/help/collaboration/activity" className="next">Activity →</a>
        </div>

        <HelpFeedback />
      </article>
    </div>
  );
}
