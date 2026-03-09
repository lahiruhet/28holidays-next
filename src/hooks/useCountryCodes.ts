import { useMemo } from "react";
import type { Country } from "react-phone-number-input";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import labels from "react-phone-number-input/locale/en.json";

export type CountryOption = {
  key: string;
  country: Country;
  name: string;
  value: string;
  callingCode: string;
};

const countryLabels = labels as Record<string, string>;

const PREFERRED_COUNTRIES_BY_CALLING_CODE: Partial<Record<string, Country>> = {
  "1": "US",
  "7": "RU",
  "39": "IT",
  "44": "GB",
  "47": "NO",
  "61": "AU",
};

const COUNTRY_OPTIONS: CountryOption[] = buildCountryOptions();

function buildCountryOptions() {
  const groupedByCallingCode = new Map<string, CountryOption[]>();

  getCountries().forEach((country) => {
    const callingCode = getCountryCallingCode(country);
    const option: CountryOption = {
      key: `${country}-${callingCode}`,
      country,
      name: countryLabels[country] ?? country,
      value: `+${callingCode}`,
      callingCode,
    };

    const existingOptions = groupedByCallingCode.get(callingCode) ?? [];
    existingOptions.push(option);
    groupedByCallingCode.set(callingCode, existingOptions);
  });

  return Array.from(groupedByCallingCode.values())
    .map((options) => {
      const preferredCountry = PREFERRED_COUNTRIES_BY_CALLING_CODE[options[0].callingCode];

      return (
        options.find((option) => option.country === preferredCountry) ??
        options.slice().sort((a, b) => a.name.localeCompare(b.name))[0]
      );
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function useCountryCodes() {
  return useMemo(() => COUNTRY_OPTIONS, []);
}
