import { HTMLAttributes } from "react";
import { TextType } from "./types";
import styles from "./Text.module.css";
import clsx from "clsx";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  type?: TextType;
}

export const Text: React.FC<TextProps> = ({
  type = "body-md",
  className,
  children,
  ...props
}) => {
  return (
    <p {...props} className={clsx(styles[type], className)}>
      {children}
    </p>
  );
};
