import React from "react";
import _ from "lodash";
import { Card } from "../util/Card";
import { repoData } from "./RepoData";
import { PrimaryButton } from "@fluentui/react";
/** Renders the GitHub component
 *
 * @type {React.FunctionComponent}
 */
export const GitHub = () => {
  /** Renders the repo list within the Card component
   *
   * @returns {Card[]}
   */
  const RenderList = () => {
    return _.map(repoData, (repo) => (
      <Card
        key={`repo-${repo?.title}`}
        title={repo?.title}
        link={repo?.link}
        content={repo?.content}
        language={repo?.language}
      />
    ));
  };
  return (
    <div>
      <PrimaryButton
        className="primaryButton"
        href="https://github.com/Ilithor"
      >
        More Projects
      </PrimaryButton>
      <div className="Card-List">
        <RenderList />
      </div>
    </div>
  );
};
/**
 * @typedef Card
 * @property {string} title
 * @property {string} link
 * @property {string} content
 * @property {string} language
 */
