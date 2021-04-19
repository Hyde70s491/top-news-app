import categories, { Category } from "../../constants/Categories";
import countries, { Country } from "../../constants/Countries";
import { SelectedCountry } from "./ConstantsSelectorModels";

export const selectCategories = (): Category[] => {
  return Object.entries(categories).map(
    ([id, category]: [string, Category]): Category => {
      return {
        apiStatusSelector: category.apiStatusSelector,
        name: category.name,
        selector: category.selector,
      };
    }
  );
};

export const selectCategoryNames = (): string[] => {
  return Object.entries(categories).map(
    ([id, category]: [string, Category]): string => category.name
  );
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
