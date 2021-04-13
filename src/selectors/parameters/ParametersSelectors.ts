import { createSelector, Selector } from "reselect";

import countries, { Country } from "../../constants/Countries";
import StoreModel from "../../models/StoreModel";
import NewsDataModel from "../../models/NewsDataModel";

const selectImage = (countryId: string): string => {
  const selectedCountry: [string, Country] | undefined = Object.entries(
    countries
  ).find(([id, country]: [string, Country]) => id === countryId);

  if (selectedCountry) {
    const selectedCountryData = selectedCountry[1];
    return selectedCountryData.flag;
  }

  return "/images/GreatBritain.png";
};

export const selectCategory = (state: StoreModel): string | null =>
  state.parameters.category;

const selectCountry = (state: StoreModel): string => state.parameters.country;

export const selectCountryImage: Selector<StoreModel, string> = createSelector(
  selectCountry,
  selectImage
);

export const selectNewsData = (state: StoreModel): NewsDataModel | null =>
  state.parameters.newsData;
