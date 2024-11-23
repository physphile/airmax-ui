import { HTMLAttributes } from "react";
import styles from "./Loader.module.css";
import { loaderSizes } from "./constants";

export interface LoaderProps
  extends Exclude<HTMLAttributes<SVGSVGElement>, "children"> {
  size?: "small" | "medium";
}

export const Loader: React.FC<LoaderProps> = ({
  size = "medium",
  ...props
}) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 256 256"
      height={loaderSizes[size]}
      {...props}
    >
      <g strokeMiterlimit="10" strokeWidth="12" clipPath="url(#a)">
        <g className={styles.antispin}>
          <path
            stroke="#343A46"
            d="M61.25 76.98a84.04 84.04 0 0 1 144.64 19.48 83.75 83.75 0 0 1 6.12 31.54c0 21.2-7.85 40.56-20.8 55.34"
          />
          <path
            stroke="url(#b)"
            d="M191.21 183.34A84.01 84.01 0 0 1 61.25 76.99"
          />
        </g>

        <g className={styles.spin}>
          <path
            stroke="#343A46"
            d="M180.07 138.71A53.17 53.17 0 0 1 74.85 128c0-17.15 8.12-32.4 20.73-42.13"
          />
          <path
            stroke="url(#c)"
            d="M95.58 85.87A52.92 52.92 0 0 1 128 74.85a53.1 53.1 0 0 1 52.07 63.87"
          />
        </g>

        <g className={styles.spin}>
          <path
            stroke="#343A46"
            d="M71.64 20.37A120.97 120.97 0 0 1 128 6.53c24.3 0 46.94 7.14 65.93 19.43A121.37 121.37 0 0 1 249.47 128c0 67.09-54.38 121.47-121.47 121.47-27.77 0-53.36-9.32-73.83-25"
          />
          <path
            stroke="url(#d)"
            d="M54.17 224.47A121.28 121.28 0 0 1 6.53 128c0-46.74 26.4-87.32 65.1-107.63"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="117.6"
          x2="117.6"
          y1="76.98"
          y2="212.01"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--airmax-color-brand)" />
          <stop offset="1" stopColor="var(--airmax-color-brand-lighter)" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="138.37"
          x2="138.37"
          y1="74.85"
          y2="138.71"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--airmax-color-brand)" />
          <stop offset="1" stopColor="var(--airmax-color-brand-lighter)" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="39.08"
          x2="39.08"
          y1="20.37"
          y2="224.47"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--airmax-color-brand)" />
          <stop offset="1" stopColor="var(--airmax-color-brand-lighter)" />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h256v256H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
