import { useEffect, useState } from "react";

type CountryOption = {
  key: string;
  label: string;
  value: string;
};

const FALLBACK_CODES: CountryOption[] = [
  { key: "LK-94", label: "Sri Lanka (+94)", value: "+94" },
  { key: "US-1", label: "United States (+1)", value: "+1" },
  { key: "GB-44", label: "United Kingdom (+44)", value: "+44" },
  { key: "IN-91", label: "India (+91)", value: "+91" },
  { key: "AU-61", label: "Australia (+61)", value: "+61" },
  { key: "AE-971", label: "United Arab Emirates (+971)", value: "+971" },
  { key: "CA-1", label: "Canada (+1)", value: "+1" },
  { key: "SG-65", label: "Singapore (+65)", value: "+65" },
];

type RestCountry = {
  cca2?: string;
  idd?: {
    root?: string;
    suffixes?: string[];
  };
  name?: {
    common?: string;
  };
};

export function useCountryCodes() {
  const [countryCodes, setCountryCodes] = useState<CountryOption[]>(FALLBACK_CODES);

  useEffect(() => {
    let isMounted = true;

    const loadCountryCodes = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,idd,cca2");
        if (!response.ok) {
          return;
        }

        const countries = (await response.json()) as RestCountry[];
        const nextOptions: CountryOption[] = [];

        countries.forEach((country) => {
          const root = country.idd?.root;
          const suffixes = country.idd?.suffixes ?? [];
          const name = country.name?.common;
          const cca2 = country.cca2;

          if (!root || !suffixes.length || !name || !cca2) {
            return;
          }

          suffixes.forEach((suffix) => {
            const value = `${root}${suffix}`;
            nextOptions.push({
              key: `${cca2}-${value}`,
              label: `${name} (${value})`,
              value,
            });
          });
        });

        if (!nextOptions.length) {
          return;
        }

        nextOptions.sort((a, b) => a.label.localeCompare(b.label));

        if (isMounted) {
          setCountryCodes(nextOptions);
        }
      } catch {
        // Keep fallback list if request fails.
      }
    };

    void loadCountryCodes();

    return () => {
      isMounted = false;
    };
  }, []);

  return countryCodes;
}
