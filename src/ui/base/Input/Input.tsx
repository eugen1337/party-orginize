import { FC, HTMLInputTypeAttribute } from "react";
import "./style.scss";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  type?: HTMLInputTypeAttribute;
};

export const Input: FC<Props> = ({
  placeholder,
  value,
  onChange,
  disabled,
  type,
}) => {
  return (
    <div className="base-input-container">
      <input
        className="base-input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
};
