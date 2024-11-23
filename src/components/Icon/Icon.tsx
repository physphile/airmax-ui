import { HTMLAttributes } from "react";
import { IconSizes } from "./types";
import { iconSizes } from "./constants";
import { IconName } from "./IconName";

export interface IconProps
  extends Exclude<HTMLAttributes<SVGElement>, "width" | "height"> {
  name: IconName;
  size?: IconSizes;
}

export const Icon: React.FC<IconProps> = ({ name, size = "medium" }) => {
  return (
    <svg width={iconSizes[size]} height={iconSizes[size]}>
      <use href={`${import.meta.env.VITE_S3_URL}/icons.svg#${name}`} />
    </svg>
  );
};
