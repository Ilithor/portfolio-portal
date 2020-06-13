import React from "react";
import _ from "lodash";
import {
  CommandBar,
  concatStyleSets,
  memoizeFunction,
  CommandBarButton,
  ContextualMenuItem,
  DirectionalHint
} from "office-ui-fabric-react";
import "./style.css";
import { useThemeData } from "../theme/themeContext";

/** @type {import('office-ui-fabric-react').IContextualMenuStyles} */
const itemStyles = {
  label: { fontSize: 20 }
};
/** @type {import('office-ui-fabric-react').IContextualMenuItemStyles} */
const menuStyles = {
  subComponentStyles: { menuItem: itemStyles, callout: {} }
};
/** Destroys and rerenders the CommandBar button when styles change
 *
 * @returns {import('office-ui-fabric-react').IContextualMenuStyles}
 */
const getCommandBarButtonStyles = memoizeFunction(originalStyles => {
  if (!originalStyles) {
    return itemStyles;
  }
  return concatStyleSets(originalStyles, itemStyles);
});
/** Custom renderer for main command bar items
 *
 * @param {import('office-ui-fabric-react').ICommandBarItemProps} props
 * @returns {import('office-ui-fabric-react').CommandBarButton}
 */
const CustomButton = props => {
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
 * @param {import('office-ui-fabric-react').IContextualMenuItemProps} props
 * @returns {import('office-ui-fabric-react').ContextualMenuItem}
 */
const CustomMenuItem = props => {
  return <ContextualMenuItem {...props} />;
};
/** @type {import('office-ui-fabric-react').IOverflowSetProps} */
const overflowProps = {
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
/** Merges to create a custom itemStyles
 *
 * @param {import('office-ui-fabric-react').IContextualMenuStyles} inputStyles
 * @returns {import('office-ui-fabric-react').IContextualMenuStyles}
 */
const mergeStyles = inputStyles => {
  const customStyles = _.merge({}, itemStyles, inputStyles);
  return customStyles;
};
/** Renders the navbar
 *
 * @returns {React.FunctionComponent}
 */
export const Navbar = () => {
  const { isDarkMode, changeTheme } = useThemeData();
  /** @type {import('office-ui-fabric-react').ICommandBarItemProps} */
  const _items = [
    {
      key: "darykkohler",
      text: "Daryk Kohler",
      styles: mergeStyles({ label: { fontSize: 28 } }),
      href: "/"
    },
    {
      key: "resume",
      text: "Resume",
      iconProps: { iconName: "WordDocument" },
      styles: itemStyles,
      href: "/resume",
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
      styles: itemStyles,
      href: "/socmon",
      ariaLabel: "SocMon"
    },
    {
      key: "linkedin",
      text: "LinkedIn",
      iconProps: { iconName: "LinkedInLogo" },
      styles: itemStyles,
      href: "https://www.linkedin.com/in/daryk-kohler/",
      target: "_blank",
      ariaLabel: "LinkedIn"
    },
    {
      key: "github",
      text: "GitHub",
      iconProps: { iconName: "Database" },
      styles: itemStyles,
      href: "/github",
      ariaLabel: "GitHub"
    }
  ];
  /** @type {import('office-ui-fabric-react').ICommandBarItemProps} */
  const _farItems = [
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
    </div>
  );
};
