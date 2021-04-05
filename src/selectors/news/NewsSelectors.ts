import NewsModel from "../../models/NewsModel";
import StoreModel from "../../models/StoreModel";
import { CategoryNews, Headlines } from "./NewsSelectorModels";

export const selectTopBusinessNews = (state: StoreModel): Headlines[] => {
  return Object.entries(state.business.entities)
    .map(
      ([id, news]: [string, NewsModel]): Headlines => {
        return {
          category: "business",
          id,
          imageUrl: news.urlToImage,
          title: news.title,
        };
      }
    )
    .filter((headline: Headlines, index: number): boolean => index < 4);
};

export const selectTopHeadlines = (state: StoreModel): Headlines[] => {
  return Object.entries(state.headlines.entities)
    .map(
      ([id, news]: [string, NewsModel]): Headlines => {
        return {
          category: "headlines",
          id,
          imageUrl: news.urlToImage,
          title: news.title,
        };
      }
    )
    .filter((headline: Headlines, index: number): boolean => index < 3);
};

export const selectSearchedNews = (state: StoreModel): CategoryNews[] => {
  return Object.entries(state.search.entities).map(
    ([id, news]: [string, NewsModel]): CategoryNews => {
      return {
        category: "search",
        id,
        imageUrl: news.urlToImage,
        title: news.title,
        subtitle: news.description,
      };
    }
  );
};
