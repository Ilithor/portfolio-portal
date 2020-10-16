import React from "react";
import { useThemeData } from "../theme/themeContext";
import { PrimaryButton } from "office-ui-fabric-react";
import "./style.css";

/** Renders the SocMon component
 *
 * @type {React.FunctionComponent}
 */
export const SocMon = () => {
  const { isDarkMode } = useThemeData();
  return (
    <div>
      <PrimaryButton
        className="primaryButton"
        href="http://socmon.azurewebsites.net/"
        target="_blank"
      >
        SocMon
      </PrimaryButton>
      <p>Built a social media site.</p>
      <img
        className="socmonImg"
        src={process.env.PUBLIC_URL + "/socmonscreenshot.png"}
        alt="SocMonScreenShot"
        style={{ opacity: isDarkMode ? 0.8 : 1 }}
      />
    </div>
  );
};
