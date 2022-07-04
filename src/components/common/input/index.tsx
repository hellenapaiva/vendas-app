import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  onChange?: (value: any) => void;
  label: string;
  columnClasses?: string;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  label,
  columnClasses,
  id,
  ...props
}: InputProps) => {
  return (
    <div className={`field column ${columnClasses}`}>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <div className="control">
        <input
          {...props}
          onChange={(e) => {
            if (onChange) {
              onChange(e.target.value);
            }
          }}
          id={id}
          className="input"
          type="text"
        />
      </div>
    </div>
  );
};
