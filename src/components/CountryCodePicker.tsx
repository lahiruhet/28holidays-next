"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import flags from "react-phone-number-input/flags";
import type { CountryOption } from "@/hooks/useCountryCodes";

type CountryCodePickerProps = {
  name: string;
  options: CountryOption[];
  defaultValue?: string;
  ariaLabel?: string;
};

function FlagIcon({ option }: { option: CountryOption }) {
  const Flag = flags[option.country];

  if (!Flag) {
    return <span className="country-code-fallback">{option.country}</span>;
  }

  return <Flag title={option.name} />;
}

export default function CountryCodePicker({
  name,
  options,
  defaultValue = "+94",
  ariaLabel = "Country code",
}: CountryCodePickerProps) {
  const pickerRef = useRef<HTMLDivElement>(null);
  const initialValue = useMemo(
    () => options.find((option) => option.value === defaultValue)?.value ?? options[0]?.value ?? "",
    [defaultValue, options],
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const selectedOption = useMemo(
    () => options.find((option) => option.value === selectedValue) ?? options[0],
    [options, selectedValue],
  );

  useEffect(() => {
    setSelectedValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!pickerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const form = pickerRef.current?.closest("form");
    if (!form) {
      return;
    }

    const handleReset = () => {
      setSelectedValue(initialValue);
      setIsOpen(false);
    };

    form.addEventListener("reset", handleReset);

    return () => {
      form.removeEventListener("reset", handleReset);
    };
  }, [initialValue]);

  if (!selectedOption) {
    return null;
  }

  return (
    <div ref={pickerRef} className="country-code-picker">
      <input type="hidden" name={name} value={selectedOption.value} />
      <button
        type="button"
        className="country-code-trigger"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="country-code-trigger-inner">
          <span className="country-code-flag" aria-hidden="true">
            <FlagIcon option={selectedOption} />
          </span>
          <span className="country-code-value">{selectedOption.value}</span>
        </span>
        <svg className="country-code-caret" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isOpen ? (
        <div className="country-code-menu" role="listbox" aria-label={ariaLabel}>
          {options.map((option) => {
            const isSelected = option.key === selectedOption.key;

            return (
              <button
                key={option.key}
                type="button"
                role="option"
                aria-selected={isSelected}
                className={`country-code-option${isSelected ? " is-selected" : ""}`}
                onClick={() => {
                  setSelectedValue(option.value);
                  setIsOpen(false);
                }}
              >
                <span className="country-code-option-main">
                  <span className="country-code-flag" aria-hidden="true">
                    <FlagIcon option={option} />
                  </span>
                  <span className="country-code-option-name">{option.name}</span>
                </span>
                <span className="country-code-option-value">{option.value}</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
