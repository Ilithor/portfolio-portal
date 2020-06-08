import React, { FunctionComponent } from "react";
import { Resume } from "./Resume";
import {
  CommandBar,
  ICommandBarItemProps,
  IButtonStyles,
  concatStyleSets,
  memoizeFunction,
  IButtonProps,
  CommandBarButton,
  IContextualMenuItemProps,
  ContextualMenuItem,
  DirectionalHint,
  PrimaryButton
} from "office-ui-fabric-react";
import "./style.css";
import { useThemeData } from "../theme/themeContext";

/** @type {import('office-ui-fabric-react').IContextualMenuStyles} */
const itemStyles: Partial<IContextualMenuStyles> = {
  label: { fontSize: 18 }
};
/** @type {import('office-ui-fabric-react').IContextualMenuItemStyles} */
const menuStyles: Partial<IContextualMenuStyles> = {
  subComponentStyles: { menuItem: itemStyles, callout: {} }
};
/** Destroys and rerenders the CommandBar button when styles change
 *
 * @returns {import('office-ui-fabric-react').concatStyleSets}
 */
const getCommandBarButtonStyles = memoizeFunction(
  (
    originalStyles: IButtonStyles | undefined
  ): Partial<IContextualMenuItemStyles> => {
    if (!originalStyles) {
      return itemStyles;
    }
    return concatStyleSets(originalStyles, itemStyles);
  }
);
/** Custom renderer for main command bar items
 *
 * @param {ICommandBarItemProps} props
 * @returns {import('office-ui-fabric-react').CommandBarButton}
 */
const CustomButton: FunctionComponent<IButtonProps> = props => {
  return (
    <CommandBarButton
      {...props}
      id="navbarButton"
      styles={getCommandBarButtonStyles(props.styles)}
    />
  );
};
/** Custom renderer for menu items
 *
 * @param {IContextualMenuItemProps} props
 * @returns {import('office-ui-fabric-react').ContextualMenuItem}
 */
const CustomMenuItem: FunctionComponent<IContextualMenuItemProps> = props => {
  return <ContextualMenuItem {...props} />;
};
const overflowProps: IButtonProps = {
  ariaLabel: "More commands",
  menuProps: {
    contextualMenuItemAs: CustomMenuItem,
    styles: menuStyles,
    items: [],
    isBeakVisible: true,
    beakWidth: 20,
    gapSpace: 10,
    directionalHint: DirectionalHint.bottomCenter
  }
};
/** Renders the navbar
 *
 */
export const Navbar: FunctionComponent = () => {
  const { isDarkMode, changeTheme } = useThemeData();
  /** Displays or closes the resume document
   *
   * @param {string} id
   * @returns {void}
   */
  const toggleDisplay = id => {
    const doc = document.getElementById(id);
    if (doc.style.maxHeight) {
      doc.style.maxHeight = null;
    } else {
      doc.style.maxHeight = doc.scrollHeight + "px";
    }
  };

  /** @type {import('office-ui-fabric-react').ICommandBarItemProps} */
  const _items: ICommandBarItemProps[] = [
    {
      key: "resume",
      text: "Resume",
      iconProps: { iconName: "WordDocument" },
      styles: itemStyles,
      onClick: () => toggleDisplay("expandDisplayResume"),
      split: true,
      ariaLabel: "Resume",
      subMenuProps: {
        styles: menuStyles,
        items: [
          {
            key: "downloadResume",
            text: "Download",
            iconProps: { iconName: "Download" },
            href:
              "https://docs.google.com/document/d/1BznqXQj4gfePHGcsLsxOzmlkKX0cKMLh8ploQOkl0vw/export?format=doc"
          }
        ]
      }
    },
    {
      key: "socmon",
      text: "SocMon",
      iconProps: { iconName: "RedEye" },
      onClick: () => toggleDisplay("expandDisplaySocMon"),
      ariaLabel: "SocMon"
    },
    {
      key: "linkedin",
      text: "LinkedIn",
      iconProps: { iconName: "LinkedInLogo" },
      href: "https://www.linkedin.com/in/daryk-kohler/",
      ariaLabel: "LinkedIn"
    },
    {
      key: "github",
      text: "GitHub",
      iconProps: { iconName: "Database" },
      href: "https://github.com/Ilithor",
      ariaLabel: "GitHub"
    }
  ];
  /** @type {import('office-ui-fabric-react').ICommandBarItemProps} */
  const _farItems: ICommandBarItemProps[] = [
    {
      key: "darkTheme",
      onClick: () => changeTheme(),
      iconProps: { iconName: isDarkMode ? "ClearNight" : "Sunny" },
      ariaLabel: "DarkTheme"
    }
  ];
  return (
    <div>
      <div className="CommandBar">
        <CommandBar
          styles={{
            root: {
              borderTop: "1px solid rgba(200, 200, 200, 0.15)",
              borderBottom: "1px solid rgba(200,200,200,0.15)"
            }
          }}
          overflowButtonProps={overflowProps}
          buttonAs={CustomButton}
          items={_items}
          farItems={_farItems}
        />
      </div>
      <Resume />
      <div id="expandDisplaySocMon">
        <PrimaryButton
          id="socMonPrimaryLink"
          href="https://www.socmon.azurewebsites.net/"
        >
          SocMon
        </PrimaryButton>
        <p>Built a social media site.</p>
        <p>
          Note: Has occasional hiccups due to limitations from database because
          of a lack of funds.
        </p>
        <img
          src={process.env.PUBLIC_URL + "/socmonscreenshot.png"}
          alt="SocMonScreenShot"
          height="650"
          width={window.innerWidth}
        />
      </div>
    </div>
  );
};
