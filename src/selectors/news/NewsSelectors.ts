import NewsModel from "../../models/NewsModel";
import StoreModel from "../../models/StoreModel";
import { CategoryNews, Headlines } from "./NewsSelectorModels";

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

export const selectTopEntertainmentNews = (state: StoreModel): Headlines[] => {
  return Object.entries(state.entertainment.entities)
    .map(
      ([id, news]: [string, NewsModel]): Headlines => {
        return {
          category: "entertainment",
          id,
          imageUrl: news.urlToImage,
          title: news.title,
        };
      }
    )
    .filter((headline: Headlines, index: number): boolean => index < 4);
};

export const selectTopGeneralNews = (state: StoreModel): Headlines[] => {
  return Object.entries(state.general.entities)
    .map(
      ([id, news]: [string, NewsModel]): Headlines => {
        return {
          category: "general",
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

export const selectTopHealthNews = (state: StoreModel): Headlines[] => {
  return Object.entries(state.health.entities)
    .map(
      ([id, news]: [string, NewsModel]): Headlines => {
        return {
          category: "health",
          id,
          imageUrl: news.urlToImage,
          title: news.title,
        };
      }
    )
    .filter((headline: Headlines, index: number): boolean => index < 4);
};

export const selectTopScienceNews = (state: StoreModel): Headlines[] => {
  return Object.entries(state.science.entities)
    .map(
      ([id, news]: [string, NewsModel]): Headlines => {
        return {
          category: "science",
          id,
          imageUrl: news.urlToImage,
          title: news.title,
        };
      }
    )
    .filter((headline: Headlines, index: number): boolean => index < 4);
};

export const selectTopSportsNews = (state: StoreModel): Headlines[] => {
  return Object.entries(state.sports.entities)
    .map(
      ([id, news]: [string, NewsModel]): Headlines => {
        return {
          category: "sports",
          id,
          imageUrl: news.urlToImage,
          title: news.title,
        };
      }
    )
    .filter((headline: Headlines, index: number): boolean => index < 4);
};
