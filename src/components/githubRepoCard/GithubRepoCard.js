import React from "react";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard(props) {
  const repo = props.repo;
  const theme = props.theme;

  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={2000} distance="20px">
      <div className="repo-card-div" style={{ backgroundColor: theme.projectCard }}>
        <div className="repo-name-div">
          <p className="repo-name" style={{ color: theme.text }}>
            {repo.name}
          </p>
        </div>
        <p className="repo-description" style={{ color: theme.text }}>
          {repo.description}
        </p>
        <div className="repo-stats">
          <div className="repo-left-stat">
            <span>
              <div
                className="language-color"
                style={{ backgroundColor: repo.primaryLanguage?.color }}
              ></div>
              <p style={{ color: theme.text }}>{repo.primaryLanguage?.name}</p>
            </span>
            <span>
              <p style={{ color: theme.text }}>
                <i className="fas fa-star"></i> {repo.stargazerCount}
              </p>
            </span>
            <span>
              <p style={{ color: theme.text }}>
                <i className="fas fa-code-branch"></i> {repo.forkCount}
              </p>
            </span>
          </div>
          <div className="repo-right-stat">
            <p style={{ color: theme.text }}>
              <i className="fas fa-eye"></i> {repo.watchers?.totalCount}
            </p>
          </div>
        </div>
        <div className="repo-card-footer">
          <button
            className="repo-visit-btn"
            style={{
              color: theme.text,
              backgroundColor: theme.body,
              border: `1px solid ${theme.text}`,
            }}
            onClick={() => openRepoinNewTab(repo.url)}
          >
            Visit Repository
          </button>
        </div>
      </div>
    </Fade>
  );
}