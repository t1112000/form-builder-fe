import React from "react";
import IcoMoon, { IconProps } from "react-icomoon";

import { IconNames } from "./Icon.type";
import iconSet from "./selection.json";

const IconSet: React.FC<IconProps> = (props) => (
  <IcoMoon iconSet={iconSet} {...props} />
);

const Icon: React.FC<IconProps & { icon: IconNames }> = ({
  icon,
  size = 24,
  color,
  ...rest
}) => {
  return (
    <IconSet
      color={color}
      icon={icon}
      style={{ width: size, height: size, stroke: "none" }}
      {...rest}
    />
  );
};

export default Icon;
