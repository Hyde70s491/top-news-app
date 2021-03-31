import { createSelector, Selector } from "reselect";

import NewsModel from "../../models/NewsModel";
import StoreModel from "../../models/StoreModel";
import { Headlines, SearchedNews } from "./NewsSelectorModels";

const selectHeadlines = (state: StoreModel): Headlines[] => {
  return Object.entries(state.headlines.entities).map(
    ([id, news]: [string, NewsModel]): Headlines => {
      return {
        id,
        imageUrl: news.urlToImage,
        title: news.title,
      };
    }
  );
};

export const selectSearchedNews = (state: StoreModel): SearchedNews[] => {
  return Object.entries(state.search.entities).map(
    ([id, news]: [string, NewsModel]): SearchedNews => {
      return {
        id,
        imageUrl: news.urlToImage,
        title: news.title,
        subtitle: news.description,
      };
    }
  );
};

export const selectTopHeadlines: Selector<
  StoreModel,
  Headlines[]
> = createSelector(selectHeadlines, (headlines: Headlines[]): Headlines[] => {
  return headlines.filter(
    (headline: Headlines, index: number): boolean => index < 3
  );
});
