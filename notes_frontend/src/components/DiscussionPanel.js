import React from "react";

// PUBLIC_INTERFACE
function DiscussionPanel() {
  /** Discussion panel card, placeholder style/state per design */
  return (
    <section className="discussion-panel">
      <div className="discussion-title">Discussion</div>
      <div className="discussion-content">
        <span className="discussion-placeholder">
          Setting up your discussion...
        </span>
      </div>
    </section>
  );
}

export default DiscussionPanel;
