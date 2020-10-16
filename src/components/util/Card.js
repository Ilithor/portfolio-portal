import React from "react";
import "../style.css";
import { FontIcon, mergeStyles } from "office-ui-fabric-react";
import { useThemeData } from "../../theme/themeContext";

/** Renders the Card component
 *
 * @type {React.FunctionComponent}
 */
export const Card = ({ title, link, content, language }) => {
  const { isDarkMode } = useThemeData();
  const iconClass = mergeStyles({
    fontSize: 10,
    marginRight: "4px",
  });
  return (
    <div
      className="Card"
      style={{ border: isDarkMode ? "1px solid #d1d5da" : "1px solid #2e2a25" }}
    >
      <div className="Card-Content">
        <div className="Card-Title">
          <a
            className="Card-Link"
            href={link}
            style={{
              color: isDarkMode ? "#e1ac2f" : "#471e6c",
            }}
          >
            <span>
              <FontIcon
                iconName="Cat"
                className={iconClass}
                style={{ fontSize: 12 }}
              />
              {title}
            </span>
          </a>
        </div>
        <p className="Card-Body">{content}</p>
        <p className="Card-Languages">
          <span className="Card-Languages-Content">
            <FontIcon iconName="Code" className={iconClass} />
            {language}
          </span>
        </p>
      </div>
    </div>
  );
};
/**
 * @typedef ICardComponentProps
 * @property {string} title
 * @property {string} link
 * @property {string} content
 * @property {string} language
 */
