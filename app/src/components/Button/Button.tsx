import { CSSProperties } from "react";
import "./Button.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  iconBeforeLabel?: string;
  iconAfterLabel?: string;
  label: string;
  visuallyHideLabel?: boolean;
};

export const Button = ({
  iconBeforeLabel,
  iconAfterLabel,
  label,
  visuallyHideLabel,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={`ds-button ${className ? className : ""}`} {...props}>
      {iconBeforeLabel && <img src={iconBeforeLabel} />}
      <span className={visuallyHideLabel ? `visually-hidden-label` : ""}>
        {label}
      </span>
      {iconAfterLabel && <img src={iconAfterLabel} />}
    </button>
  );
};
