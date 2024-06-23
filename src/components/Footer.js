import React from "react";

export default function Footer(props) {
  return (
    <footer>
      <a className="link-card" href="https://devchallenges.io/" target="_blank">
        <div className="link-title">Challenges</div>
        <div className="link-description">
          Choose a challenge and start learning by building real-life projects.
        </div>
      </a>

      <a
        className="link-card"
        href="https://devchallenges.io/challenges"
        target="_blank"
      >
        <div className="link-title">Solutions</div>
        <div className="link-description">
          Checkout how orders solve the challenges, compare with yours and give
          them feedback.
        </div>
      </a>

      <a className="link-card" href="https://devchallenges.io/" target="_blank">
        <div className="link-title">Blogs</div>
        <div className="link-description">
          Checkout devchallenges blogs, tutorials, updates. Find useful
          resources to get you started.
        </div>
      </a>

      <a className="link-card" href="https://devchallenges.io/" target="_blank">
        <div className="link-title">Deploy</div>
        <div className="link-description">
          How to deploy and submit your solution.
        </div>
      </a>
    </footer>
  );
}
