import { HelpSidebar } from "@/components/help-sidebar";
import { HelpFeedback } from "@/components/help-feedback";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorites & Quick Jump | TWO Help",
};

export default function FavoritesQuickJumpArticle() {
  return (
    <div className="help-layout">
      <HelpSidebar activeHref="/resources/help/organizing/favorites-quick-jump" />

      <article className="harticle">
        <p className="harticle-eyebrow">Organizing</p>
        <h1 className="display">Favorites &amp; Quick Jump</h1>
        <p className="harticle-meta">2 min read · Last updated Aug 2026</p>

        <p>
          Two fast ways to get back to what matters: star docs you come back to often, and jump to anything by
          typing a few letters of its name.
        </p>

        <h2 className="display">Starring a doc</h2>
        <p>
          Hover any doc in Home, Docs, or a folder view and click the star icon that appears. Starred docs stay
          starred everywhere that doc shows up.
        </p>

        <figure className="hil">
          <div className="hil-frame">
            <div className="hil-win hil-pad">
              <div className="hil-pills">
                <span className="hil-pill">Recent</span>
                <span className="hil-pill on">Favorites</span>
              </div>
              <div className="hil-lr gap">Launch plan<span className="hil-star">★</span></div>
              <div className="hil-lr">Chapter three<span className="hil-star">★</span></div>
              <div className="hil-lr muted">Meeting notes<span className="hil-star off">☆</span></div>
            </div>
          </div>
          <div className="hil-notes">
            <div className="hil-note"><span className="hil-tick" /><span><b>Star a doc</b>hover it, click the star</span></div>
            <div className="hil-note"><span className="hil-tick" /><span><b>Favorites pill</b>every starred doc on Home</span></div>
          </div>
        </figure>

        <h2 className="display">Viewing your favorites</h2>
        <p>
          From Home, click the <b>Favorites</b> pill next to <b>Recent</b>{" "}
          to see every doc you&apos;ve starred, in one list.
        </p>

        <div className="harticle-tip">
          <p><b>Tip:</b>{" "}
          The sidebar also has a section labeled &quot;Favorites&quot;. That&apos;s a different feature. It
          shows folders you&apos;ve pinned, not starred docs. Starred docs only live under the Favorites pill on
          Home.</p>
        </div>

        <h2 className="display">Quick Jump (⌘K)</h2>
        <p>
          Press <b>⌘K</b> (or <b>Ctrl+K</b>{" "}
          on Windows) from anywhere in the app to open Quick Jump. Start typing and it searches your docs and
          folders by name. Use the arrow keys and Enter to jump straight there without touching your mouse.
        </p>

        <figure className="hil">
          <div className="hil-frame">
            <div className="hil-win hil-pad center">
              <div className="hil-palette">
                <div className="hil-pr q">⌕ cha<span className="hil-caret" /><span className="hil-kbd">⌘K</span></div>
                <div className="hil-pr on">Chapter three</div>
                <div className="hil-pr">Chapter four</div>
                <div className="hil-pr">Changelog notes</div>
              </div>
            </div>
          </div>
          <div className="hil-notes">
            <div className="hil-note"><span className="hil-tick" /><span><b>⌘K or Ctrl+K</b>from anywhere in the app</span></div>
            <div className="hil-note"><span className="hil-tick" /><span><b>Arrows and Enter</b>no mouse needed</span></div>
          </div>
        </figure>

        <div className="harticle-pn">
          <a href="/resources/help/organizing/library">← Library</a>
          <span />
        </div>

        <HelpFeedback />
      </article>
    </div>
  );
}
