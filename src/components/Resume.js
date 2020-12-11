import React from "react";
import "./style.css";
import { useThemeData } from "../theme/themeContext";
import { PrimaryButton } from "office-ui-fabric-react";

/** Renders the resume component
 *
 * @type {React.FunctionComponent}
 */
export const Resume = () => {
  const { isDarkMode } = useThemeData();
  return (
    <div>
      <div>
        <PrimaryButton
          className="primaryButton"
          href="https://docs.google.com/document/d/1iXV9QfSfKT3h2yW9fxushw6Ah57pYKjsmkYZZIaZfB0/export?format=doc"
        >
          Download Word
        </PrimaryButton>
        <PrimaryButton
          className="primaryButton"
          href="https://drive.google.com/uc?export=download&id=1_OS0C1mR9lyDFuhiN6MJkLjZoFr2Z2Bo"
        >
          Download PDF
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
