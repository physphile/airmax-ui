import { HTMLAttributes } from "react";
import { PlugType } from "./types";

export interface PlugProps
  extends Exclude<HTMLAttributes<HTMLImageElement>, "src"> {
  type: PlugType;
}

export const Plug: React.FC<PlugProps> = ({ type, ...props }) => {
  return (
    <img {...props} src={`${import.meta.env.VITE_S3_URL}/plugs/${type}.svg`} />
  );
};
