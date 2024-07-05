import React from "react";
import { useCountries } from "use-react-countries";

function PhoneInput() {
  const { countries } = useCountries();
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0]); // Select the first country by default

  const handleCountryChange = (event) => {
    setSelectedCountry(
      countries.find((country) => country.name === event.target.value)
    );
  };

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <select
        value={selectedCountry.name}
        onChange={handleCountryChange}
        className="h-10 px-3 rounded border border-blue-gray-200 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {countries.map((country) => (
          <option key={country.name} value={country.name}>
            {country.countryCallingCode} - {country.name}
          </option>
        ))}
      </select>
      <input
        type="tel"
        placeholder="Mobile Number"
        className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
    </div>
  );
}

export default PhoneInput;
