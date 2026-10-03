import { HelpSidebar } from "@/components/help-sidebar";
import { HelpFeedback } from "@/components/help-feedback";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Using Folders | TWO Help",
};

export default function FoldersArticle() {
  return (
    <div className="help-layout">
      <HelpSidebar activeHref="/resources/help/organizing/folders" />

      <article className="harticle">
        <p className="harticle-eyebrow">Organizing</p>
        <h1 className="display">Using folders</h1>
        <p className="harticle-meta">2 min read · Last updated Aug 2026</p>

        <p>
          Folders keep related docs together in your sidebar. Each folder gets its own color automatically, so
          you can tell them apart at a glance without setting anything up.
        </p>

        <h2 className="display">Creating a folder</h2>
        <p>
          Click the <b>+</b> next to your workspace name in the sidebar and choose <b>New Folder</b>. It appears
          in your sidebar immediately, ready to rename.
        </p>

        <figure className="hil">
          <div className="hil-frame">
            <div className="hil-win hil-row">
              <div className="hil-tree">
                <div className="hil-fr">▾ <i>▢</i>Clients</div>
                <div className="hil-fr in on">▾ <i>▢</i>Studio Kiko<span className="hil-more">···</span></div>
                <div className="hil-fr in2"><i>▤</i>Brief</div>
                <div className="hil-fr in2"><i>▤</i>Moodboard notes</div>
                <div className="hil-fr">▸ <i>▢</i>Writing</div>
                <div className="hil-pop hil-pop-folder">
                  <div className="hil-pr">📌 Pin</div>
                  <div className="hil-pr">Rename</div>
                  <div className="hil-pr danger">Delete</div>
                </div>
              </div>
              <div className="hil-body grow hide-sm">
                <p className="hil-lb">Clients › Studio Kiko</p>
                <div className="hil-ln" style={{ width: "70%" }} />
                <div className="hil-ln" style={{ width: "55%" }} />
              </div>
            </div>
          </div>
          <div className="hil-notes">
            <div className="hil-note"><span className="hil-tick" /><span><b>Folders inside folders</b>as deep as you like</span></div>
            <div className="hil-note"><span className="hil-tick" /><span><b>··· menu</b>pin, rename or delete</span></div>
            <div className="hil-note"><span className="hil-tick" /><span><b>Breadcrumbs</b>find your way back up</span></div>
          </div>
        </figure>

        <h2 className="display">Moving docs into a folder</h2>
        <p>
          Drag any doc from your sidebar or the Docs list and drop it onto a folder to move it in. You can also
          use <b>Move to folder</b> from a doc&apos;s <b>···</b>{" "}
          menu if you&apos;d rather not drag.
        </p>

        <h2 className="display">Renaming and deleting</h2>
        <p>
          Click the <b>···</b>{" "}
          that appears when you hover a folder to rename or delete it. Deleting a folder doesn&apos;t delete the
          docs inside it. They move back to your main Docs list.
        </p>

        <h2 className="display">Pinning a folder</h2>
        <p>
          Pin any folder from its <b>···</b>{" "}
          menu to keep it visible at the top of your sidebar, above the rest of your folder list. Handy for
          whatever you&apos;re actively working out of right now.
        </p>

        <div className="harticle-tip">
          <p><b>Tip:</b> Folders are flat. You can&apos;t nest one folder inside another right now. If you need
          more structure, splitting work across a few clearly named folders works better than trying to build a
          deep hierarchy.</p>
        </div>

        <div className="harticle-pn">
          <a href="/resources/help/organizing">← Organizing</a>
          <a href="/resources/help/organizing/library" className="next">Library →</a>
        </div>

        <HelpFeedback />
      </article>
    </div>
  );
}
