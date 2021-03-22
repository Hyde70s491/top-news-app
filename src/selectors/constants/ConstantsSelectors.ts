import categories from "../../constants/Categories";
import countries, { Country } from "../../constants/Countries";
import { SelectedCountry } from "./ConstantsSelectorModels";

export const selectCategories = (): string[] => {
  return Object.values(categories);
};

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
