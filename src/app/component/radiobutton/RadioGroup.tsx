import { useEffect, useState, useRef, ReactNode } from "react";
// import "./radio.css";

interface RadioGroupProps {
  children: ReactNode;
  label?: string;
  checkedValue?: string;
  onChange?: (value: string) => void;
}

export default function RadioGroup({
  children,
  label = "",
  checkedValue = "",
  onChange
}: RadioGroupProps) {
  // value to store the checked value
  const [value, setValue] = useState<string>(checkedValue);
  // ref value will persist across re-renders
  const buttonGroupRef = useRef<HTMLDivElement>(null);
  const prevCheckedButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // value is the dependency for this useEffect, whenever it changes, I am setting the attribute for checked button and removing attribute from the previousCheckedButton
    const checkedButton = buttonGroupRef.current?.querySelector(
      `button[role="radio"][data-value="${value}"]`
    ) as HTMLButtonElement;
    if (checkedButton) {
      if (prevCheckedButtonRef.current) {
        prevCheckedButtonRef.current.setAttribute("aria-checked", "false");
      }
      checkedButton.setAttribute("aria-checked", "true");
      prevCheckedButtonRef.current = checkedButton;
    }
  }, [value]);

  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const clickedButton = (event.target as HTMLElement).closest("button[role='radio']");
    const clickButton = clickedButton as HTMLButtonElement | null;
    if (clickedButton) {
      setValue(clickButton?.dataset.value || "");
      if (onChange) {
        onChange(clickButton?.dataset.value || "");
    }
  }};

  return (
    <div className="radio-group" role="radiogroup" aria-label={label}>
      <p className="radio-group__label">{label}</p>
      <div
        className="flex flex-wrap gap-4"
        ref={buttonGroupRef}
        onClick={clickHandler}
      >
        {children}
      </div>
    </div>
  );
}

