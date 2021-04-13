import NewsCategoryStateModel from "../../models/NewsCategoryStateModel";
import StoreModel from "../../models/StoreModel";
import NewsDataModel from "../../models/NewsDataModel";
import { getNewsData } from "../../utilities/DataUtility";

export const selectCategoryNews = (state: StoreModel): NewsDataModel[] => {
  const categoryParameter: string | null = state.parameters.category;

  if (!categoryParameter) {
    return [];
  }

  const categoryState: NewsCategoryStateModel = Object.entries(state).filter(
    ([id, partialState]: [string, NewsCategoryStateModel]): boolean =>
      id === categoryParameter
  )[0][1];

  return getNewsData(categoryState.entities, categoryParameter);
};

export const selectSearchedNews = (state: StoreModel): NewsDataModel[] => {
  return getNewsData(state.search.entities, "search");
};

export const selectTopBusinessNews = (state: StoreModel): NewsDataModel[] => {
  return getNewsData(state.business.entities, "business").filter(
    (headline: NewsDataModel, index: number): boolean => index < 4
  );
};

export const selectTopEntertainmentNews = (
  state: StoreModel
): NewsDataModel[] => {
  return getNewsData(state.entertainment.entities, "entertainment").filter(
    (headline: NewsDataModel, index: number): boolean => index < 4
  );
};

export const selectTopGeneralNews = (state: StoreModel): NewsDataModel[] => {
  return getNewsData(state.general.entities, "general").filter(
    (headline: NewsDataModel, index: number): boolean => index < 4
  );
};

export const selectTopHeadlines = (state: StoreModel): NewsDataModel[] => {
  return getNewsData(state.headlines.entities, "headlines").filter(
    (headline: NewsDataModel, index: number): boolean => index < 3
  );
};

export const selectTopHealthNews = (state: StoreModel): NewsDataModel[] => {
  return getNewsData(state.health.entities, "health").filter(
    (headline: NewsDataModel, index: number): boolean => index < 4
  );
};

export const selectTopScienceNews = (state: StoreModel): NewsDataModel[] => {
  return getNewsData(state.science.entities, "science").filter(
    (headline: NewsDataModel, index: number): boolean => index < 4
  );
};

export const selectTopSportsNews = (state: StoreModel): NewsDataModel[] => {
  return getNewsData(state.sports.entities, "sports").filter(
    (headline: NewsDataModel, index: number): boolean => index < 4
  );
};

export const selectTopTechnologyNews = (state: StoreModel): NewsDataModel[] => {
  return getNewsData(state.technology.entities, "technology").filter(
    (headline: NewsDataModel, index: number): boolean => index < 4
  );
};
