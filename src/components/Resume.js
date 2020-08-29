import React from "react";
import "./style.css";
import { useThemeData } from "../theme/themeContext";
import { PrimaryButton } from "office-ui-fabric-react";

/** Renders the resume component
 *
 * @returns {React.FunctionComponent}
 */
export const Resume = () => {
  const { isDarkMode } = useThemeData();
  return (
    <div>
      <div>
        <PrimaryButton
          className="primaryButton"
          href="https://docs.google.com/document/d/1M421JmpYLwIWfBC9NIY8UTemMVS-gqAAkcq2Ojisndk/export?format=doc"
        >
          Download Document
        </PrimaryButton>
      </div>
      <div className="resumeDisplay" style={{ opacity: !isDarkMode ? 1 : 0.8 }}>
        <img
          className="resumeImg"
          alt="Resume Page 1"
          src={process.env.PUBLIC_URL + "/resumepage1.png"}
        />
        <img
          className="resumeImg"
          alt="Resume Page 2"
          src={process.env.PUBLIC_URL + "/resumepage2.png"}
        />
      </div>
    </div>
  );
};
