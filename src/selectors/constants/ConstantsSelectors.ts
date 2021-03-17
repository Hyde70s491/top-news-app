import countries, { Country } from "../../constants/Countries";
import { SelectedCountry } from "./ConstantsSelectorModels";

export const selectCountries = (): SelectedCountry[] => {
  return Object.entries(countries).map(
    ([id, country]: [string, Country]): SelectedCountry => {
      return {
        flag: country.flag,
        id,
        name: country.name,
      };
    }
  );
};
